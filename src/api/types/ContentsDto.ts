/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Squidex from "..";

export interface ContentsDto extends Squidex.Resource {
    /** The total number of content items. */
    total: number;
    /** The content items. */
    items: Squidex.ContentDto[];
    /** The possible statuses. */
    statuses: Squidex.StatusInfoDto[];
}
