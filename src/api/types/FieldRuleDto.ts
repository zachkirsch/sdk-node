/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Squidex from "..";

export interface FieldRuleDto {
    action: Squidex.FieldRuleAction;
    /** The field to update. */
    field: string;
    /** The condition. */
    condition?: string;
}