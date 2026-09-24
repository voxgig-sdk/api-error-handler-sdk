
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ApiErrorHandlerSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = ApiErrorHandlerSDK.test()
    equal(testsdk instanceof ApiErrorHandlerSDK, true,
      'ApiErrorHandlerSDK.test() must return a client synchronously')
  })

})
