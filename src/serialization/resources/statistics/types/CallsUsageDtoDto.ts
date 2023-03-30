/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@fern-api/squidex";
import * as core from "../../../../core";

export const CallsUsageDtoDto: core.serialization.ObjectSchema<
    serializers.CallsUsageDtoDto.Raw,
    Squidex.CallsUsageDtoDto
> = core.serialization.object({
    totalCalls: core.serialization.number().optional(),
    totalBytes: core.serialization.number().optional(),
    monthCalls: core.serialization.number().optional(),
    monthBytes: core.serialization.number().optional(),
    blockingApiCalls: core.serialization.number().optional(),
    allowedBytes: core.serialization.number().optional(),
    allowedCalls: core.serialization.number().optional(),
    averageElapsedMs: core.serialization.number().optional(),
    details: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).CallsUsagePerDateDto)
    ),
});

export declare namespace CallsUsageDtoDto {
    interface Raw {
        totalCalls?: number | null;
        totalBytes?: number | null;
        monthCalls?: number | null;
        monthBytes?: number | null;
        blockingApiCalls?: number | null;
        allowedBytes?: number | null;
        allowedCalls?: number | null;
        averageElapsedMs?: number | null;
        details: serializers.CallsUsagePerDateDto.Raw[];
    }
}