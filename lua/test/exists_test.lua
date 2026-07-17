-- ApiErrorHandler SDK exists test

local sdk = require("api-error-handler_sdk")

describe("ApiErrorHandlerSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
