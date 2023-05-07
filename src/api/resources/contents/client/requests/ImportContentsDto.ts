/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Squidex from "../../../..";

export interface ImportContentsDto {
    /** The data to import. */
    datas: Squidex.ContentData[];
    /** True to automatically publish the content. */
    publish?: boolean;
    /** True to turn off scripting for faster inserts. Default: true. */
    doNotScript?: boolean;
    /** True to turn off costly validation: Unique checks, asset checks and reference checks. Default: true. */
    optimizeValidation?: boolean;
}