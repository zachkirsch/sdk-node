/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ContentsGetContentsRequest {
    /**
     * The optional ids of the content to fetch.
     */
    ids?: string;
    /**
     * The optional json query.
     */
    q?: string;
    /**
     * Optional number of items to skip.
     */
    search?: string;
    /**
     * Optional number of items to take.
     */
    top?: number;
    /**
     * Optional number of items to skip.
     */
    skip?: number;
    /**
     * Optional OData order definition.
     */
    orderby?: string;
    /**
     * Optional OData filter.
     */
    filter?: string;
    /**
     * Return unpublished content items.
     */
    flatten?: boolean;
    /**
     * Only resolve these languages (comma-separated).
     */
    languages?: string;
    /**
     * Do not return the total amount, if it would be slow.
     */
    noSlowTotal?: boolean;
    /**
     * Do not return the total amount.
     */
    noTotal?: boolean;
}
