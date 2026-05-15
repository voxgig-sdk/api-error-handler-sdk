<?php
declare(strict_types=1);

// ApiErrorHandler SDK utility: result_headers

class ApiErrorHandlerResultHeaders
{
    public static function call(ApiErrorHandlerContext $ctx): ?ApiErrorHandlerResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
