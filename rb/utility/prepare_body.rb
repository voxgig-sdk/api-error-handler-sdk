# ApiErrorHandler SDK utility: prepare_body
require_relative 'media'
module ApiErrorHandlerUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return ApiErrorHandlerUtilities.raw_body(ctx.reqdata) if ApiErrorHandlerUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
