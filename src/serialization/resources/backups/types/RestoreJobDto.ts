/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@fern-api/squidex";
import * as core from "../../../../core";

export const RestoreJobDto: core.serialization.ObjectSchema<serializers.RestoreJobDto.Raw, Squidex.RestoreJobDto> =
    core.serialization.object({
        url: core.serialization.string(),
        log: core.serialization.list(core.serialization.string()),
        started: core.serialization.string().optional(),
        stopped: core.serialization.string().optional(),
        status: core.serialization.lazy(async () => (await import("../../..")).JobStatus).optional(),
    });

export declare namespace RestoreJobDto {
    interface Raw {
        url: string;
        log: string[];
        started?: string | null;
        stopped?: string | null;
        status?: serializers.JobStatus.Raw | null;
    }
}