/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@fern-api/squidex";
import * as core from "../../../../core";

export const RoleDto: core.serialization.ObjectSchema<serializers.RoleDto.Raw, Squidex.RoleDto> = core.serialization
    .object({
        name: core.serialization.string(),
        numClients: core.serialization.number().optional(),
        numContributors: core.serialization.number().optional(),
        isDefaultRole: core.serialization.boolean().optional(),
        permissions: core.serialization.list(core.serialization.string()),
        properties: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).Resource));

export declare namespace RoleDto {
    interface Raw extends serializers.Resource.Raw {
        name: string;
        numClients?: number | null;
        numContributors?: number | null;
        isDefaultRole?: boolean | null;
        permissions: string[];
        properties: Record<string, unknown>;
    }
}