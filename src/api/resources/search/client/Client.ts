/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Squidex from "../../..";
import URLSearchParams from "@ungap/url-search-params";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Search {
    interface Options {
        environment?: environments.SquidexEnvironment | string;
        token: core.Supplier<core.BearerToken>;
    }
}

export class Search {
    constructor(protected readonly options: Search.Options) {}

    public async getSearchResults(
        app: string,
        request: Squidex.SearchGetSearchResultsRequest = {}
    ): Promise<Squidex.SearchResultDto[]> {
        const { query } = request;
        const _queryParams = new URLSearchParams();
        if (query != null) {
            _queryParams.append("query", query);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.SquidexEnvironment.Default, `api/apps/${app}/search`),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.search.getSearchResults.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.SquidexError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SquidexError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SquidexTimeoutError();
            case "unknown":
                throw new errors.SquidexError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader() {
        const bearer = await core.Supplier.get(this.options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
