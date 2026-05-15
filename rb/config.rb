# ApiErrorHandler SDK configuration

module ApiErrorHandlerConfig
  def self.make_config
    {
      "main" => {
        "name" => "ApiErrorHandler",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://abhi-api.vercel.app",
        "auth" => {
          "prefix" => "Bearer",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "logo_generation" => {},
        },
      },
      "entity" => {
        "logo_generation" => {
          "fields" => [],
          "name" => "logo_generation",
          "op" => {
            "load" => {
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "Hello World",
                        "kind" => "query",
                        "name" => "text",
                        "orig" => "text",
                        "reqd" => true,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/api/logo/glitch",
                  "parts" => [
                    "api",
                    "logo",
                    "glitch",
                  ],
                  "select" => {
                    "exist" => [
                      "text",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "index$" => 0,
                },
              ],
              "input" => "data",
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    ApiErrorHandlerFeatures.make_feature(name)
  end
end
