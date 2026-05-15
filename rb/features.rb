# ApiErrorHandler SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module ApiErrorHandlerFeatures
  def self.make_feature(name)
    case name
    when "base"
      ApiErrorHandlerBaseFeature.new
    when "test"
      ApiErrorHandlerTestFeature.new
    else
      ApiErrorHandlerBaseFeature.new
    end
  end
end
