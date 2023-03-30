/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@fern-api/squidex";
import * as core from "../../../../core";

export const WorkflowTransitionDto: core.serialization.ObjectSchema<
    serializers.WorkflowTransitionDto.Raw,
    Squidex.WorkflowTransitionDto
> = core.serialization.object({
    expression: core.serialization.string().optional(),
    roles: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace WorkflowTransitionDto {
    interface Raw {
        expression?: string | null;
        roles?: string[] | null;
    }
}