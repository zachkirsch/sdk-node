/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Squidex from "..";

export interface RuleEventsDto {
    /** The total number of rule events. */
    total: number;
    /** The rule events. */
    items: Squidex.RuleEventDto[];
}
