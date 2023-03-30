/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@fern-api/squidex";
import * as core from "../../../../core";

export const PlansDto: core.serialization.ObjectSchema<serializers.PlansDto.Raw, Squidex.PlansDto> =
    core.serialization.object({
        plans: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).PlanDto)),
        currentPlanId: core.serialization.string().optional(),
        planOwner: core.serialization.string().optional(),
        portalLink: core.serialization.string().optional(),
        referral: core.serialization.lazyObject(async () => (await import("../../..")).ReferralInfo).optional(),
        locked: core.serialization.lazy(async () => (await import("../../..")).PlansLockedReason).optional(),
    });

export declare namespace PlansDto {
    interface Raw {
        plans: serializers.PlanDto.Raw[];
        currentPlanId?: string | null;
        planOwner?: string | null;
        portalLink?: string | null;
        referral?: serializers.ReferralInfo.Raw | null;
        locked?: serializers.PlansLockedReason.Raw | null;
    }
}