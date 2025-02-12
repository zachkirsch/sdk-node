/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface DiscourseRuleActionDto {
    /** The url to the discourse server. */
    url?: string;
    /** The api key to authenticate to your discourse server. */
    apiKey?: string;
    /** The api username to authenticate to your discourse server. */
    apiUsername?: string;
    /** The text as markdown. */
    text?: string;
    /** The optional title when creating new topics. */
    title?: string;
    /** The optional topic id. */
    topic?: number;
    /** The optional category id. */
    category?: number;
}
