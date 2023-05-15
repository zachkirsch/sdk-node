/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Squidex from "../../../..";

export interface ContentsPostUpsertContentRequest {
    /**
     * The initial status.
     */
    status?: string;
    /**
     * Makes the update as patch.
     */
    patch?: boolean;
    /**
     * True to automatically publish the content.
     */
    publish?: boolean;
    /**
     * Return unpublished content items.
     */
    flatten?: boolean;
    /**
     * Only resolve these languages (comma-separated).
     */
    languages?: string;
    body: Record<string, Squidex.ContentFieldData>;
}
