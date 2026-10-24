import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "logo_generation",
    "accessor": "LogoGeneration",
    "op": "load",
    "method": "GET",
    "path": "/api/logo/glitch",
    "args": [],
    "select": {
      "text": "Hello World"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "image/png",
      "image/jpeg"
    ],
    "query": [
      "text"
    ],
    "queryArgs": [
      {
        "name": "text",
        "wire": "text"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": null,
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
