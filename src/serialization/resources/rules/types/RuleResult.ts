/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@fern-api/squidex";
import * as core from "../../../../core";

export const RuleResult: core.serialization.Schema<serializers.RuleResult.Raw, Squidex.RuleResult> =
    core.serialization.enum_(["Pending", "Success", "Failed", "Timeout"]);

export declare namespace RuleResult {
    type Raw = "Pending" | "Success" | "Failed" | "Timeout";
}