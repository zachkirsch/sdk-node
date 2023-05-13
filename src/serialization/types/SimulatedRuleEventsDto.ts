/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const SimulatedRuleEventsDto: core.serialization.ObjectSchema<
    serializers.SimulatedRuleEventsDto.Raw,
    Squidex.SimulatedRuleEventsDto
> = core.serialization
    .object({
        total: core.serialization.number(),
        items: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("..")).SimulatedRuleEventDto)
        ),
    })
    .extend(core.serialization.lazyObject(async () => (await import("..")).Resource));

export declare namespace SimulatedRuleEventsDto {
    interface Raw extends serializers.Resource.Raw {
        total: number;
        items: serializers.SimulatedRuleEventDto.Raw[];
    }
}
