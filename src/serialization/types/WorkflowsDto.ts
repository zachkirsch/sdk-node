/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const WorkflowsDto: core.serialization.ObjectSchema<serializers.WorkflowsDto.Raw, Squidex.WorkflowsDto> =
    core.serialization.object({
        items: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("..")).WorkflowDto))
            .optional(),
        errors: core.serialization.list(core.serialization.string()).optional(),
    });

export declare namespace WorkflowsDto {
    interface Raw {
        items?: serializers.WorkflowDto.Raw[] | null;
        errors?: string[] | null;
    }
}
