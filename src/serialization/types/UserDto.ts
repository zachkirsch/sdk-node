/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const UserDto: core.serialization.ObjectSchema<serializers.UserDto.Raw, Squidex.UserDto> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        email: core.serialization.string().optional(),
        displayName: core.serialization.string().optional(),
        isLocked: core.serialization.boolean().optional(),
        permissions: core.serialization.list(core.serialization.string()).optional(),
    });

export declare namespace UserDto {
    interface Raw {
        id?: string | null;
        email?: string | null;
        displayName?: string | null;
        isLocked?: boolean | null;
        permissions?: string[] | null;
    }
}
