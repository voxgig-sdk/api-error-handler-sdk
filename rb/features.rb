# ApiErrorHandler SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module ApiErrorHandlerFeatures
  def self.make_feature(name)
    case name
    when "base"
      ApiErrorHandlerBaseFeature.new
    when "ratelimit"
      ApiErrorHandlerRatelimitFeature.new
    when "retry"
      ApiErrorHandlerRetryFeature.new
    when "test"
      ApiErrorHandlerTestFeature.new
    when "timeout"
      ApiErrorHandlerTimeoutFeature.new
    else
      ApiErrorHandlerBaseFeature.new
    end
  end
end
