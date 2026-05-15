# ApiErrorHandler SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

ApiErrorHandlerUtility.registrar = ->(u) {
  u.clean = ApiErrorHandlerUtilities::Clean
  u.done = ApiErrorHandlerUtilities::Done
  u.make_error = ApiErrorHandlerUtilities::MakeError
  u.feature_add = ApiErrorHandlerUtilities::FeatureAdd
  u.feature_hook = ApiErrorHandlerUtilities::FeatureHook
  u.feature_init = ApiErrorHandlerUtilities::FeatureInit
  u.fetcher = ApiErrorHandlerUtilities::Fetcher
  u.make_fetch_def = ApiErrorHandlerUtilities::MakeFetchDef
  u.make_context = ApiErrorHandlerUtilities::MakeContext
  u.make_options = ApiErrorHandlerUtilities::MakeOptions
  u.make_request = ApiErrorHandlerUtilities::MakeRequest
  u.make_response = ApiErrorHandlerUtilities::MakeResponse
  u.make_result = ApiErrorHandlerUtilities::MakeResult
  u.make_point = ApiErrorHandlerUtilities::MakePoint
  u.make_spec = ApiErrorHandlerUtilities::MakeSpec
  u.make_url = ApiErrorHandlerUtilities::MakeUrl
  u.param = ApiErrorHandlerUtilities::Param
  u.prepare_auth = ApiErrorHandlerUtilities::PrepareAuth
  u.prepare_body = ApiErrorHandlerUtilities::PrepareBody
  u.prepare_headers = ApiErrorHandlerUtilities::PrepareHeaders
  u.prepare_method = ApiErrorHandlerUtilities::PrepareMethod
  u.prepare_params = ApiErrorHandlerUtilities::PrepareParams
  u.prepare_path = ApiErrorHandlerUtilities::PreparePath
  u.prepare_query = ApiErrorHandlerUtilities::PrepareQuery
  u.result_basic = ApiErrorHandlerUtilities::ResultBasic
  u.result_body = ApiErrorHandlerUtilities::ResultBody
  u.result_headers = ApiErrorHandlerUtilities::ResultHeaders
  u.transform_request = ApiErrorHandlerUtilities::TransformRequest
  u.transform_response = ApiErrorHandlerUtilities::TransformResponse
}
