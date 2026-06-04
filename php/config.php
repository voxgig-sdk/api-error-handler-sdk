<?php
declare(strict_types=1);

// ApiErrorHandler SDK configuration

class ApiErrorHandlerConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "ApiErrorHandler",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://abhi-api.vercel.app",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "logo_generation" => [],
                ],
            ],
            "entity" => [
        'logo_generation' => [
          'fields' => [],
          'name' => 'logo_generation',
          'op' => [
            'load' => [
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'Hello World',
                        'kind' => 'query',
                        'name' => 'text',
                        'orig' => 'text',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/api/logo/glitch',
                  'parts' => [
                    'api',
                    'logo',
                    'glitch',
                  ],
                  'select' => [
                    'exist' => [
                      'text',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return ApiErrorHandlerFeatures::make_feature($name);
    }
}
