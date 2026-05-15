# ApiErrorHandler SDK exists test

require "minitest/autorun"
require_relative "../ApiErrorHandler_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = ApiErrorHandlerSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
