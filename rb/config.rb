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
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "query" => [
                      {
                        "active" => true,
                        "example" => "Hello World",
                        "kind" => "query",
                        "name" => "text",
                        "orig" => "text",
                        "reqd" => true,
                        "type" => "`$STRING`",
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
                  "index$" => 0,
                },
              ],
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
