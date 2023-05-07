/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Squidex from "..";

export interface WorkflowDto {
    /** The workflow id. */
    id?: string;
    /** The name of the workflow. */
    name?: string;
    /** The workflow steps. */
    steps?: Record<string, Squidex.WorkflowStepDto | undefined>;
    /** The schema ids. */
    schemaIds?: string[];
    /** The initial step. */
    initial?: string;
}