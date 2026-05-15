<?php
declare(strict_types=1);

// ApiErrorHandler SDK utility: result_body

class ApiErrorHandlerResultBody
{
    public static function call(ApiErrorHandlerContext $ctx): ?ApiErrorHandlerResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
