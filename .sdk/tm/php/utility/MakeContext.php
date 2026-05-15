<?php
declare(strict_types=1);

// ApiErrorHandler SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class ApiErrorHandlerMakeContext
{
    public static function call(array $ctxmap, ?ApiErrorHandlerContext $basectx): ApiErrorHandlerContext
    {
        return new ApiErrorHandlerContext($ctxmap, $basectx);
    }
}
