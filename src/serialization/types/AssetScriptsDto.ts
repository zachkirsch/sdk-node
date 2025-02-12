/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const AssetScriptsDto: core.serialization.ObjectSchema<
    serializers.AssetScriptsDto.Raw,
    Squidex.AssetScriptsDto
> = core.serialization.object({
    query: core.serialization.string().optional(),
    queryPre: core.serialization.string().optional(),
    create: core.serialization.string().optional(),
    update: core.serialization.string().optional(),
    annotate: core.serialization.string().optional(),
    move: core.serialization.string().optional(),
    delete: core.serialization.string().optional(),
    version: core.serialization.number().optional(),
});

export declare namespace AssetScriptsDto {
    interface Raw {
        query?: string | null;
        queryPre?: string | null;
        create?: string | null;
        update?: string | null;
        annotate?: string | null;
        move?: string | null;
        delete?: string | null;
        version?: number | null;
    }
}
