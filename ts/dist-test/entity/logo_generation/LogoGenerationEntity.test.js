"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('LogoGenerationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when API_ERROR_HANDLER_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('API_ERROR_HANDLER_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ApiErrorHandlerSDK.test();
        const ent = testsdk.LogoGeneration();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.API_ERROR_HANDLER_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'logo_generation.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [], "name": "logo_generation", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": "Hello World", "kind": "query", "name": "text", "orig": "text", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /api/logo/glitch", "json": "{\"operationId\":\"getGlitchLogo\",\"parameters\":[{\"description\":\"Text to be displayed in the glitch logo\",\"example\":\"Hello World\",\"in\":\"query\",\"name\":\"text\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"image/jpeg\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}},\"image/png\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}}},\"description\":\"Successful response with generated logo\"},\"400\":{\"content\":{\"application/json\":{\"example\":{\"error\":\"Bad Request\",\"message\":\"The 'text' parameter is required and cannot be empty\",\"status\":400},\"schema\":{\"properties\":{\"error\":{\"description\":\"Error type or name\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error message explaining what went wrong\",\"type\":\"string\"},\"path\":{\"description\":\"API endpoint path where the error occurred\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"},\"timestamp\":{\"description\":\"Timestamp when the error occurred\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"error\",\"message\",\"status\"],\"type\":\"object\"}}},\"description\":\"Bad Request - Invalid or missing text parameter\"},\"404\":{\"content\":{\"application/json\":{\"example\":{\"error\":\"Not Found\",\"message\":\"The requested resource could not be found\",\"status\":404},\"schema\":{\"properties\":{\"error\":{\"description\":\"Error type or name\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error message explaining what went wrong\",\"type\":\"string\"},\"path\":{\"description\":\"API endpoint path where the error occurred\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"},\"timestamp\":{\"description\":\"Timestamp when the error occurred\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"error\",\"message\",\"status\"],\"type\":\"object\"}}},\"description\":\"Not Found - Resource not found\"},\"500\":{\"content\":{\"application/json\":{\"example\":{\"error\":\"Internal Server Error\",\"message\":\"An unexpected error occurred while processing your request\",\"status\":500},\"schema\":{\"properties\":{\"error\":{\"description\":\"Error type or name\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error message explaining what went wrong\",\"type\":\"string\"},\"path\":{\"description\":\"API endpoint path where the error occurred\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"},\"timestamp\":{\"description\":\"Timestamp when the error occurred\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"error\",\"message\",\"status\"],\"type\":\"object\"}}},\"description\":\"Internal Server Error\"},\"503\":{\"content\":{\"application/json\":{\"example\":{\"error\":\"Service Unavailable\",\"message\":\"The service is temporarily unavailable. Please try again later\",\"status\":503},\"schema\":{\"properties\":{\"error\":{\"description\":\"Error type or name\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error message explaining what went wrong\",\"type\":\"string\"},\"path\":{\"description\":\"API endpoint path where the error occurred\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"},\"timestamp\":{\"description\":\"Timestamp when the error occurred\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"error\",\"message\",\"status\"],\"type\":\"object\"}}},\"description\":\"Service Unavailable\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/logo/glitch", "segments": [{ "lit": "api" }, { "lit": "logo" }, { "lit": "glitch" }], "select": { "exist": ["text"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "logo_generation", "name__orig": "logo_generation", "Name": "LogoGeneration", "name_": "logo_generation", "name-": "logo-generation", "NAME": "LOGO_GENERATION", "index$": 0 }, { "active": true, "entity": "logo_generation", "key$": "BasicLogoGenerationFlow", "kind": "basic", "name": "BasicLogoGenerationFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "logo_generation_ref01", "srcdatavar": "logo_generation_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-logo_generation_ref01" } }], "index$": 0 }] }, 'LogoGeneration');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let logo_generation_ref01_data = Object.values(setup.data.existing.logo_generation)[0];
        // LOAD
        const logo_generation_ref01_ent = client.LogoGeneration();
        const logo_generation_ref01_match_dt0 = {};
        const logo_generation_ref01_data_dt0 = (await logo_generation_ref01_ent.load(logo_generation_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != logo_generation_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/logo_generation/LogoGenerationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ApiErrorHandlerSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['logo_generation01', 'logo_generation02', 'logo_generation03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'API_ERROR_HANDLER_TEST_LOGO_GENERATION_ENTID': idmap,
        'API_ERROR_HANDLER_TEST_LIVE': 'FALSE',
        'API_ERROR_HANDLER_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['API_ERROR_HANDLER_TEST_LOGO_GENERATION_ENTID'];
    const live = 'TRUE' === env.API_ERROR_HANDLER_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['API_ERROR_HANDLER_TEST_LOGO_GENERATION_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.ApiErrorHandlerSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.API_ERROR_HANDLER_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=LogoGenerationEntity.test.js.map