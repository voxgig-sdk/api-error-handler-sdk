-- ApiErrorHandler SDK error

local json = require("dkjson")

local ApiErrorHandlerError = {}
ApiErrorHandlerError.__index = ApiErrorHandlerError

-- Reachable for a debugger, absent from the table itself: the context holds
-- the live spec and options, and an error is what gets dumped or encoded.
local CONTEXT = setmetatable({}, { __mode = "k" })


function ApiErrorHandlerError.new(code, msg, ctx)
  local self = setmetatable({}, ApiErrorHandlerError)
  self.is_sdk_error = true
  self.sdk = "ApiErrorHandler"
  self.code = code or ""
  self.msg = msg or ""
  self.result = nil
  self.spec = nil
  CONTEXT[self] = ctx
  return self
end


function ApiErrorHandlerError:context()
  return CONTEXT[self]
end


function ApiErrorHandlerError:error()
  return self.msg
end


-- What make_error attached is already cleaned; the context is not part of
-- the record.
function ApiErrorHandlerError:to_table()
  return {
    sdk = self.sdk,
    code = self.code,
    msg = self.msg,
    status = self.status,
    result = self.result,
    spec = self.spec,
  }
end


function ApiErrorHandlerError:to_json()
  return json.encode(self:to_table())
end


function ApiErrorHandlerError:__tostring()
  return self.msg
end


function ApiErrorHandlerError.__tojson(self)
  return self:to_json()
end


return ApiErrorHandlerError
