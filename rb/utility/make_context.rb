# ApiErrorHandler SDK utility: make_context
require_relative '../core/context'
module ApiErrorHandlerUtilities
  MakeContext = ->(ctxmap, basectx) {
    ApiErrorHandlerContext.new(ctxmap, basectx)
  }
end
