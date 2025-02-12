/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Squidex from "..";

export interface UpsertSchemaFieldDto {
    /** The name of the field. Must be unique within the schema. */
    name: string;
    /** Defines if the field is hidden. */
    isHidden: boolean;
    /** Defines if the field is locked. */
    isLocked: boolean;
    /** Defines if the field is disabled. */
    isDisabled: boolean;
    /** Determines the optional partitioning of the field. */
    partitioning?: string;
    properties: Squidex.FieldPropertiesDto;
    /** The nested fields. */
    nested?: Squidex.UpsertSchemaNestedFieldDto[];
}
