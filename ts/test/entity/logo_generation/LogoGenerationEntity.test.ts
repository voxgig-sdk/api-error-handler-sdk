

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { ApiErrorHandlerSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('LogoGenerationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when API_ERROR_HANDLER_TEST_LIVE=TRUE.
  afterEach(liveDelay('API_ERROR_HANDLER_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ApiErrorHandlerSDK.test()
    const ent = testsdk.LogoGeneration()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.API_ERROR_HANDLER_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'logo_generation.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"logo_generation","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"example":"Hello World","kind":"query","name":"text","orig":"text","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/logo/glitch","json":"{\"operationId\":\"getGlitchLogo\",\"parameters\":[{\"description\":\"Text to be displayed in the glitch logo\",\"example\":\"Hello World\",\"in\":\"query\",\"name\":\"text\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"image/jpeg\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}},\"image/png\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}}},\"description\":\"Successful response with generated logo\"},\"400\":{\"content\":{\"application/json\":{\"example\":{\"error\":\"Bad Request\",\"message\":\"The 'text' parameter is required and cannot be empty\",\"status\":400},\"schema\":{\"properties\":{\"error\":{\"description\":\"Error type or name\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error message explaining what went wrong\",\"type\":\"string\"},\"path\":{\"description\":\"API endpoint path where the error occurred\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"},\"timestamp\":{\"description\":\"Timestamp when the error occurred\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"error\",\"message\",\"status\"],\"type\":\"object\"}}},\"description\":\"Bad Request - Invalid or missing text parameter\"},\"404\":{\"content\":{\"application/json\":{\"example\":{\"error\":\"Not Found\",\"message\":\"The requested resource could not be found\",\"status\":404},\"schema\":{\"properties\":{\"error\":{\"description\":\"Error type or name\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error message explaining what went wrong\",\"type\":\"string\"},\"path\":{\"description\":\"API endpoint path where the error occurred\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"},\"timestamp\":{\"description\":\"Timestamp when the error occurred\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"error\",\"message\",\"status\"],\"type\":\"object\"}}},\"description\":\"Not Found - Resource not found\"},\"500\":{\"content\":{\"application/json\":{\"example\":{\"error\":\"Internal Server Error\",\"message\":\"An unexpected error occurred while processing your request\",\"status\":500},\"schema\":{\"properties\":{\"error\":{\"description\":\"Error type or name\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error message explaining what went wrong\",\"type\":\"string\"},\"path\":{\"description\":\"API endpoint path where the error occurred\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"},\"timestamp\":{\"description\":\"Timestamp when the error occurred\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"error\",\"message\",\"status\"],\"type\":\"object\"}}},\"description\":\"Internal Server Error\"},\"503\":{\"content\":{\"application/json\":{\"example\":{\"error\":\"Service Unavailable\",\"message\":\"The service is temporarily unavailable. Please try again later\",\"status\":503},\"schema\":{\"properties\":{\"error\":{\"description\":\"Error type or name\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error message explaining what went wrong\",\"type\":\"string\"},\"path\":{\"description\":\"API endpoint path where the error occurred\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"},\"timestamp\":{\"description\":\"Timestamp when the error occurred\",\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"error\",\"message\",\"status\"],\"type\":\"object\"}}},\"description\":\"Service Unavailable\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/logo/glitch","segments":[{"lit":"api"},{"lit":"logo"},{"lit":"glitch"}],"select":{"exist":["text"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"logo_generation","name__orig":"logo_generation","Name":"LogoGeneration","name_":"logo_generation","name-":"logo-generation","NAME":"LOGO_GENERATION","index$":0}, {"active":true,"entity":"logo_generation","key$":"BasicLogoGenerationFlow","kind":"basic","name":"BasicLogoGenerationFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"logo_generation_ref01","srcdatavar":"logo_generation_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-logo_generation_ref01"}}],"index$":0}]}, 'LogoGeneration')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let logo_generation_ref01_data = Object.values(setup.data.existing.logo_generation)[0] as any

    // LOAD
    const logo_generation_ref01_ent = client.LogoGeneration()
    const logo_generation_ref01_match_dt0: any = {}
    const logo_generation_ref01_data_dt0 = (await logo_generation_ref01_ent.load(logo_generation_ref01_match_dt0)).data()
    assert(null != logo_generation_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/logo_generation/LogoGenerationTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = ApiErrorHandlerSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['logo_generation01','logo_generation02','logo_generation03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'API_ERROR_HANDLER_TEST_LOGO_GENERATION_ENTID': idmap,
    'API_ERROR_HANDLER_TEST_LIVE': 'FALSE',
    'API_ERROR_HANDLER_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['API_ERROR_HANDLER_TEST_LOGO_GENERATION_ENTID']

  const live = 'TRUE' === env.API_ERROR_HANDLER_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['API_ERROR_HANDLER_TEST_LOGO_GENERATION_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new ApiErrorHandlerSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
