/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const EventConsumerDto: core.serialization.ObjectSchema<
    serializers.EventConsumerDto.Raw,
    Squidex.EventConsumerDto
> = core.serialization.object({
    isStopped: core.serialization.boolean().optional(),
    isResetting: core.serialization.boolean().optional(),
    count: core.serialization.number().optional(),
    name: core.serialization.string().optional(),
    error: core.serialization.string().optional(),
    position: core.serialization.string().optional(),
});

export declare namespace EventConsumerDto {
    interface Raw {
        isStopped?: boolean | null;
        isResetting?: boolean | null;
        count?: number | null;
        name?: string | null;
        error?: string | null;
        position?: string | null;
    }
}