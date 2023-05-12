/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const BackupJobDto: core.serialization.ObjectSchema<serializers.BackupJobDto.Raw, Squidex.BackupJobDto> =
    core.serialization.object({
        id: core.serialization.string(),
        started: core.serialization.string(),
        stopped: core.serialization.string().optional(),
        handledEvents: core.serialization.number(),
        handledAssets: core.serialization.number(),
        status: core.serialization.lazy(async () => (await import("..")).JobStatus),
    });

export declare namespace BackupJobDto {
    interface Raw {
        id: string;
        started: string;
        stopped?: string | null;
        handledEvents: number;
        handledAssets: number;
        status: serializers.JobStatus.Raw;
    }
}
