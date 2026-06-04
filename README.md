# ApiErrorHandler SDK

Standardised error-response helpers exposed alongside Abhi API's logo generators

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About API Error Handler

API Error Handler is part of [Abhi API](https://abhi-api.vercel.app), a free public-API collection maintained by [Abhishek Suresh](https://github.com/AbhishekSuresh2) and hosted on Vercel. The catalogue groups dozens of small endpoints (anime images, downloaders, jokes, games, search proxies, logo makers, etc.) behind a single host.

The slug specifically surfaces the logo-generation family of endpoints, which return rendered text-effect images for a supplied `text` query parameter.

Known logo endpoints under `/api/logo/`:

- `/api/logo/cyberMask?text=...`
- `/api/logo/glitch?text=...`
- `/api/logo/gold?text=...`
- `/api/logo/leaves?text=...`
- `/api/logo/matrix?text=...`
- `/api/logo/neon?text=...`
- `/api/logo/neonDream?text=...`
- `/api/logo/retroWave?text=...`
- `/api/logo/shadow?text=...`

Operational notes: the service is hosted on Vercel at `https://abhi-api.vercel.app`. CORS is reported as disabled on the freepublicapis.com catalogue entry, so calls are best made server-side. No authentication, rate limits, or formal SLA are documented.

## Try it

**TypeScript**
```bash
npm install api-error-handler
```

**Python**
```bash
pip install api-error-handler-sdk
```

**PHP**
```bash
composer require voxgig/api-error-handler-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/api-error-handler-sdk/go
```

**Ruby**
```bash
gem install api-error-handler-sdk
```

**Lua**
```bash
luarocks install api-error-handler-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { ApiErrorHandlerSDK } from 'api-error-handler'

const client = new ApiErrorHandlerSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o api-error-handler-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "api-error-handler": {
      "command": "/abs/path/to/api-error-handler-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **LogoGeneration** | Text-effect logo image generator endpoints under `/api/logo/{style}` (e.g. `glitch`, `neon`, `matrix`, `gold`, `cyberMask`, `leaves`, `neonDream`, `retroWave`, `shadow`), each accepting a `text` query parameter. | `/api/logo/glitch` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from apierrorhandler_sdk import ApiErrorHandlerSDK

client = ApiErrorHandlerSDK({})


# Load a specific logogeneration
logogeneration, err = client.LogoGeneration(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'apierrorhandler_sdk.php';

$client = new ApiErrorHandlerSDK([]);


// Load a specific logogeneration
[$logogeneration, $err] = $client->LogoGeneration(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/api-error-handler-sdk/go"

client := sdk.NewApiErrorHandlerSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "ApiErrorHandler_sdk"

client = ApiErrorHandlerSDK.new({})


# Load a specific logogeneration
logogeneration, err = client.LogoGeneration(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("api-error-handler_sdk")

local client = sdk.new({})


-- Load a specific logogeneration
local logogeneration, err = client:LogoGeneration(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = ApiErrorHandlerSDK.test()
const result = await client.LogoGeneration().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = ApiErrorHandlerSDK.test(None, None)
result, err = client.LogoGeneration(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = ApiErrorHandlerSDK::test(null, null);
[$result, $err] = $client->LogoGeneration(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.LogoGeneration(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = ApiErrorHandlerSDK.test(nil, nil)
result, err = client.LogoGeneration(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:LogoGeneration(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the API Error Handler

- Upstream: [https://abhi-api.vercel.app](https://abhi-api.vercel.app)
- API docs: [https://abhi-api.vercel.app/docs](https://abhi-api.vercel.app/docs)

- The provider does not publish a licence or terms-of-use page.
- Treat the service as an undocumented free public endpoint and do not rely on it for production use.
- Attribution to Abhi API (https://abhi-api.vercel.app) is courteous when redistributing generated assets.

---

Generated from the API Error Handler OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
