# Squidex Node Library

[![npm shield](https://img.shields.io/npm/v/@squidex/squidex)](https://www.npmjs.com/package/@squidex/squidex)
[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-SDK%20generated%20by%20Fern-brightgreen)](https://github.com/fern-api/fern)

The Squidex Node.js library provides access to the Squidex API from JavaScript/TypeScript.

## Documentation

API reference documentation is available [here](https://cloud.squidex.io/api/docs).

## Installation

```bash
npm install @squidex/squidex
# or
yarn add @squidex/squidex
```

## Usage

[![Try it out](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/squidex-typescript-sdk-hg1o4f?file=app.ts&view=editor)

```typescript
import { SquidexClient, SquidexInMemoryTokenStore, SquidexStorageTokenStore } from "@squidex/squidex";

const client = new SquidexClient({
    clientId: "client-id",
    clientSecret: "client-secret",
    appName: "my-app",
    environment: "https://your.squidex-deployment",
    tokenStore: new 
});

const response = await client.rules.runRule("rule-id", {
    fromSnapshots: true,
});

console.log("Received response from Squidex!", response);
```

## Handling errors

When the API returns a non-success status code (4xx or 5xx response), a subclass of [SquidexError](https://github.com/Squidex/sdk-node/blob/main/src/errors/SquidexError.ts) will be thrown:

```ts
import { Squidex } from "@squidex/squidex";

try {
    const response = await client.rules.runRule("rule-id", {
        fromSnapshots: true,
    });
} catch (err) {
  if (err instanceof Squidex.BadRequestError) {
    console.log(err.statusCode);
    console.log(err.message);
    console.log(err.body); 
  }
}
```

Error codes are as followed:

| Status Code | Error Type                 |
| ----------- | -------------------------- |
| 400         | `BadRequestError`          |
| 403         | `ForbiddenError`           |
| 404         | `NotFoundError`            |
| 409         | `ConflictError`            |
| 413         | `ContentTooLargeError`     |
| 500         | `InternalServerError`      |
| 501         | `NotImplementedError`      |

## Release Candidate status

This SDK is a release candidate, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest opening an issue first to discuss with us!

On the other hand, contributions to the README are always very welcome!
