-- ApiErrorHandler SDK error

local ApiErrorHandlerError = {}
ApiErrorHandlerError.__index = ApiErrorHandlerError


function ApiErrorHandlerError.new(code, msg, ctx)
  local self = setmetatable({}, ApiErrorHandlerError)
  self.is_sdk_error = true
  self.sdk = "ApiErrorHandler"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function ApiErrorHandlerError:error()
  return self.msg
end


function ApiErrorHandlerError:__tostring()
  return self.msg
end


return ApiErrorHandlerError
