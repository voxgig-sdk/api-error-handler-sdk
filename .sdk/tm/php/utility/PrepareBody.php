<?php
declare(strict_types=1);

// ApiErrorHandler SDK utility: prepare_body

class ApiErrorHandlerPrepareBody
{
    public static function call(ApiErrorHandlerContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
