/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Squidex from "..";

export type RuleActionDto =
    | Squidex.RuleActionDto.Algolia
    | Squidex.RuleActionDto.AzureQueue
    | Squidex.RuleActionDto.Comment
    | Squidex.RuleActionDto.CreateContent
    | Squidex.RuleActionDto.Discourse
    | Squidex.RuleActionDto.ElasticSearch
    | Squidex.RuleActionDto.Email
    | Squidex.RuleActionDto.Fastly
    | Squidex.RuleActionDto.Medium
    | Squidex.RuleActionDto.Notification
    | Squidex.RuleActionDto.OpenSearch
    | Squidex.RuleActionDto.Prerender
    | Squidex.RuleActionDto.Script
    | Squidex.RuleActionDto.SignalR
    | Squidex.RuleActionDto.Slack
    | Squidex.RuleActionDto.Tweet
    | Squidex.RuleActionDto.Typesense
    | Squidex.RuleActionDto.Webhook;

export declare namespace RuleActionDto {
    interface Algolia extends Squidex.AlgoliaRuleActionDto, _Base {
        type: "Algolia";
    }

    interface AzureQueue extends Squidex.AzureQueueRuleActionDto, _Base {
        type: "AzureQueue";
    }

    interface Comment extends Squidex.CommentRuleActionDto, _Base {
        type: "Comment";
    }

    interface CreateContent extends Squidex.CreateContentRuleActionDto, _Base {
        type: "CreateContent";
    }

    interface Discourse extends Squidex.DiscourseRuleActionDto, _Base {
        type: "Discourse";
    }

    interface ElasticSearch extends Squidex.ElasticSearchRuleActionDto, _Base {
        type: "ElasticSearch";
    }

    interface Email extends Squidex.EmailRuleActionDto, _Base {
        type: "Email";
    }

    interface Fastly extends Squidex.FastlyRuleActionDto, _Base {
        type: "Fastly";
    }

    interface Medium extends Squidex.MediumRuleActionDto, _Base {
        type: "Medium";
    }

    interface Notification extends Squidex.NotificationRuleActionDto, _Base {
        type: "Notification";
    }

    interface OpenSearch extends Squidex.OpenSearchRuleActionDto, _Base {
        type: "OpenSearch";
    }

    interface Prerender extends Squidex.PrerenderRuleActionDto, _Base {
        type: "Prerender";
    }

    interface Script extends Squidex.ScriptRuleActionDto, _Base {
        type: "Script";
    }

    interface SignalR extends Squidex.SignalRRuleActionDto, _Base {
        type: "SignalR";
    }

    interface Slack extends Squidex.SlackRuleActionDto, _Base {
        type: "Slack";
    }

    interface Tweet extends Squidex.TweetRuleActionDto, _Base {
        type: "Tweet";
    }

    interface Typesense extends Squidex.TypesenseRuleActionDto, _Base {
        type: "Typesense";
    }

    interface Webhook extends Squidex.WebhookRuleActionDto, _Base {
        type: "Webhook";
    }

    interface _Base {
        actionType: string;
    }
}
