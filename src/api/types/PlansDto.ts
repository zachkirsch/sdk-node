/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Squidex from "..";

export interface PlansDto {
    /** The available plans. */
    plans: Squidex.PlanDto[];
    /** The current plan id. */
    currentPlanId?: string;
    /** The plan owner. */
    planOwner?: string;
    /** The link to the management portal. */
    portalLink?: string;
    referral?: Squidex.ReferralInfo;
    locked: Squidex.PlansLockedReason;
}