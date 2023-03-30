/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@fern-api/squidex";
import * as core from "../../../../core";

export const ConfigurePreviewUrlsDto: core.serialization.Schema<
    serializers.ConfigurePreviewUrlsDto.Raw,
    Squidex.ConfigurePreviewUrlsDto
> = core.serialization.record(core.serialization.string(), core.serialization.string());

export declare namespace ConfigurePreviewUrlsDto {
    type Raw = Record<string, string>;
}