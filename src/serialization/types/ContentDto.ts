/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Squidex from "../../api";
import * as core from "../../core";

export const ContentDto: core.serialization.ObjectSchema<serializers.ContentDto.Raw, Squidex.ContentDto> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        createdBy: core.serialization.string().optional(),
        lastModifiedBy: core.serialization.string().optional(),
        data: core.serialization.unknown(),
        referenceData: core.serialization.lazy(async () => (await import("..")).ContentData).optional(),
        created: core.serialization.string().optional(),
        lastModified: core.serialization.string().optional(),
        status: core.serialization.string().optional(),
        newStatus: core.serialization.string().optional(),
        statusColor: core.serialization.string().optional(),
        newStatusColor: core.serialization.string().optional(),
        editToken: core.serialization.string().optional(),
        scheduleJob: core.serialization.lazyObject(async () => (await import("..")).ScheduleJobDto).optional(),
        schemaId: core.serialization.string().optional(),
        schemaName: core.serialization.string().optional(),
        schemaDisplayName: core.serialization.string().optional(),
        referenceFields: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("..")).FieldDto))
            .optional(),
        isDeleted: core.serialization.boolean().optional(),
        version: core.serialization.number().optional(),
    });

export declare namespace ContentDto {
    interface Raw {
        id?: string | null;
        createdBy?: string | null;
        lastModifiedBy?: string | null;
        data?: unknown;
        referenceData?: serializers.ContentData.Raw | null;
        created?: string | null;
        lastModified?: string | null;
        status?: string | null;
        newStatus?: string | null;
        statusColor?: string | null;
        newStatusColor?: string | null;
        editToken?: string | null;
        scheduleJob?: serializers.ScheduleJobDto.Raw | null;
        schemaId?: string | null;
        schemaName?: string | null;
        schemaDisplayName?: string | null;
        referenceFields?: serializers.FieldDto.Raw[] | null;
        isDeleted?: boolean | null;
        version?: number | null;
    }
}
