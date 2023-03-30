/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@fern-api/squidex";
import * as core from "../../../../core";

export const RuleTriggerDto: core.serialization.ObjectSchema<serializers.RuleTriggerDto.Raw, Squidex.RuleTriggerDto> =
    core.serialization.object({
        triggerType: core.serialization.string(),
    });

export declare namespace RuleTriggerDto {
    interface Raw {
        triggerType: string;
    }
}