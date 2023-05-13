/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const AssetFoldersDto: core.serialization.ObjectSchema<
    serializers.AssetFoldersDto.Raw,
    Squidex.AssetFoldersDto
> = core.serialization
    .object({
        total: core.serialization.number(),
        items: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).AssetFolderDto)),
        path: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).AssetFolderDto)),
    })
    .extend(core.serialization.lazyObject(async () => (await import("..")).Resource));

export declare namespace AssetFoldersDto {
    interface Raw extends serializers.Resource.Raw {
        total: number;
        items: serializers.AssetFolderDto.Raw[];
        path: serializers.AssetFolderDto.Raw[];
    }
}
