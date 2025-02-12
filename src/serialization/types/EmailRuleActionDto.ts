/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const EmailRuleActionDto: core.serialization.ObjectSchema<
    serializers.EmailRuleActionDto.Raw,
    Squidex.EmailRuleActionDto
> = core.serialization.object({
    serverHost: core.serialization.string().optional(),
    serverPort: core.serialization.number().optional(),
    serverUsername: core.serialization.string().optional(),
    serverPassword: core.serialization.string().optional(),
    messageFrom: core.serialization.string().optional(),
    messageTo: core.serialization.string().optional(),
    messageSubject: core.serialization.string().optional(),
    messageBody: core.serialization.string().optional(),
});

export declare namespace EmailRuleActionDto {
    interface Raw {
        serverHost?: string | null;
        serverPort?: number | null;
        serverUsername?: string | null;
        serverPassword?: string | null;
        messageFrom?: string | null;
        messageTo?: string | null;
        messageSubject?: string | null;
        messageBody?: string | null;
    }
}
