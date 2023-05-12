/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const ClientsDto: core.serialization.ObjectSchema<serializers.ClientsDto.Raw, Squidex.ClientsDto> =
    core.serialization.object({
        items: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).ClientDto)),
    });

export declare namespace ClientsDto {
    interface Raw {
        items: serializers.ClientDto.Raw[];
    }
}
