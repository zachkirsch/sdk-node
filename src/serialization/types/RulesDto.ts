/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const RulesDto: core.serialization.ObjectSchema<serializers.RulesDto.Raw, Squidex.RulesDto> = core.serialization
    .object({
        items: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).RuleDto)),
        runningRuleId: core.serialization.string().optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("..")).Resource));

export declare namespace RulesDto {
    interface Raw extends serializers.Resource.Raw {
        items: serializers.RuleDto.Raw[];
        runningRuleId?: string | null;
    }
}
