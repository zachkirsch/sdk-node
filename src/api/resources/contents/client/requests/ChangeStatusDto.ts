/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ChangeStatusDto {
    /** The new status. */
    status: string;
    /** The due time. */
    dueTime?: string;
    /** True to check referrers of this content. */
    checkReferrers?: boolean;
}
