
import { Context } from './Context'


class ApiErrorHandlerError extends Error {

  isApiErrorHandlerError = true

  sdk = 'ApiErrorHandler'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  ApiErrorHandlerError
}

