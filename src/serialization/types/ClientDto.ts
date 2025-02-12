/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const ClientDto: core.serialization.ObjectSchema<serializers.ClientDto.Raw, Squidex.ClientDto> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        secret: core.serialization.string().optional(),
        name: core.serialization.string().optional(),
        role: core.serialization.string().optional(),
        apiCallsLimit: core.serialization.number().optional(),
        apiTrafficLimit: core.serialization.number().optional(),
        allowAnonymous: core.serialization.boolean().optional(),
    });

export declare namespace ClientDto {
    interface Raw {
        id?: string | null;
        secret?: string | null;
        name?: string | null;
        role?: string | null;
        apiCallsLimit?: number | null;
        apiTrafficLimit?: number | null;
        allowAnonymous?: boolean | null;
    }
}
