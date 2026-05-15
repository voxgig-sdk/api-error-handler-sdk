package = "voxgig-sdk-api-error-handler"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/api-error-handler-sdk.git"
}
description = {
  summary = "ApiErrorHandler SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["api-error-handler_sdk"] = "api-error-handler_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
