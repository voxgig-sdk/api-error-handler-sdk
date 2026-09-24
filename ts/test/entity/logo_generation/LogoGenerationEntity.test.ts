

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"logo_generation","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/logo/glitch","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"Hello World","k":"query","n":"text","or":"text","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/logo/glitch","q":{"exist":["text"]},"r":{},"s":[{"lit":"api"},{"lit":"logo"},{"lit":"glitch"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"logo_generation","name__orig":"logo_generation","Name":"LogoGeneration","name_":"logo_generation","name-":"logo-generation","NAME":"LOGO_GENERATION","index$":0}, {"active":true,"entity":"logo_generation","key$":"BasicLogoGenerationFlow","kind":"basic","name":"BasicLogoGenerationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"logo_generation_ref01","srcdatavar":"logo_generation_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-logo_generation_ref01"}}],"index$":0}]}, 'LogoGeneration', {"GET /api/logo/glitch":{"protocol":"http","operationId":"getGlitchLogo","responses":{"200":{"description":"Successful response with generated logo","content":{"image/png":{"schema":{"type":"string","format":"binary"}},"image/jpeg":{"schema":{"type":"string","format":"binary"}}}},"400":{"description":"Bad Request - Invalid or missing text parameter","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error type or name"},"message":{"type":"string","description":"Detailed error message explaining what went wrong"},"status":{"type":"integer","description":"HTTP status code"},"timestamp":{"type":"string","format":"date-time","description":"Timestamp when the error occurred"},"path":{"type":"string","description":"API endpoint path where the error occurred"}},"required":["error","message","status"],"x-ref":"#/components/schemas/ErrorResponse"},"example":{"error":"Bad Request","message":"The 'text' parameter is required and cannot be empty","status":400}}}},"404":{"description":"Not Found - Resource not found","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error type or name"},"message":{"type":"string","description":"Detailed error message explaining what went wrong"},"status":{"type":"integer","description":"HTTP status code"},"timestamp":{"type":"string","format":"date-time","description":"Timestamp when the error occurred"},"path":{"type":"string","description":"API endpoint path where the error occurred"}},"required":["error","message","status"],"x-ref":"#/components/schemas/ErrorResponse"},"example":{"error":"Not Found","message":"The requested resource could not be found","status":404}}}},"500":{"description":"Internal Server Error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error type or name"},"message":{"type":"string","description":"Detailed error message explaining what went wrong"},"status":{"type":"integer","description":"HTTP status code"},"timestamp":{"type":"string","format":"date-time","description":"Timestamp when the error occurred"},"path":{"type":"string","description":"API endpoint path where the error occurred"}},"required":["error","message","status"],"x-ref":"#/components/schemas/ErrorResponse"},"example":{"error":"Internal Server Error","message":"An unexpected error occurred while processing your request","status":500}}}},"503":{"description":"Service Unavailable","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error type or name"},"message":{"type":"string","description":"Detailed error message explaining what went wrong"},"status":{"type":"integer","description":"HTTP status code"},"timestamp":{"type":"string","format":"date-time","description":"Timestamp when the error occurred"},"path":{"type":"string","description":"API endpoint path where the error occurred"}},"required":["error","message","status"],"x-ref":"#/components/schemas/ErrorResponse"},"example":{"error":"Service Unavailable","message":"The service is temporarily unavailable. Please try again later","status":503}}}}},"parameters":[{"name":"text","in":"query","description":"Text to be displayed in the glitch logo","required":true,"schema":{"type":"string"},"example":"Hello World","index$":0}],"securitySource":"unspecified"}})
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
  
