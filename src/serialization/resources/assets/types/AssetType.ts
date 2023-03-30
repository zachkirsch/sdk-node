/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Squidex } from "@fern-api/squidex";
import * as core from "../../../../core";

export const AssetType: core.serialization.Schema<serializers.AssetType.Raw, Squidex.AssetType> =
    core.serialization.enum_(["Unknown", "Image", "Audio", "Video"]);

export declare namespace AssetType {
    type Raw = "Unknown" | "Image" | "Audio" | "Video";
}