/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Squidex } from "@fern-api/squidex";

export interface CreateRuleDto {
    trigger: Squidex.RuleTriggerDto;
    action: Squidex.RuleActionDto;
}