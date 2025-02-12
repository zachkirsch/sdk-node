/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const NotificationRuleActionDto: core.serialization.ObjectSchema<
    serializers.NotificationRuleActionDto.Raw,
    Squidex.NotificationRuleActionDto
> = core.serialization.object({
    user: core.serialization.string().optional(),
    text: core.serialization.string().optional(),
    url: core.serialization.string().optional(),
    client: core.serialization.string().optional(),
});

export declare namespace NotificationRuleActionDto {
    interface Raw {
        user?: string | null;
        text?: string | null;
        url?: string | null;
        client?: string | null;
    }
}
