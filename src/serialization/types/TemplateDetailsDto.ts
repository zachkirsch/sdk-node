/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const TemplateDetailsDto: core.serialization.ObjectSchema<
    serializers.TemplateDetailsDto.Raw,
    Squidex.TemplateDetailsDto
> = core.serialization
    .object({
        details: core.serialization.string(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("..")).Resource));

export declare namespace TemplateDetailsDto {
    interface Raw extends serializers.Resource.Raw {
        details: string;
    }
}
