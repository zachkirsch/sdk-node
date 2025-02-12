/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Squidex from "..";

export interface AppSettingsDto {
    /** The configured app patterns. */
    patterns?: Squidex.PatternDto[];
    /** The configured UI editors. */
    editors?: Squidex.EditorDto[];
    /** Hide the scheduler for content items. */
    hideScheduler?: boolean;
    /** Hide the datetime mode button. */
    hideDateTimeModeButton?: boolean;
    /** The version of the app. */
    version?: number;
}
