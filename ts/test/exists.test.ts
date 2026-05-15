
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ApiErrorHandlerSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await ApiErrorHandlerSDK.test()
    equal(null !== testsdk, true)
  })

})
