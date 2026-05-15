<?php
declare(strict_types=1);

// ApiErrorHandler SDK utility: feature_add

class ApiErrorHandlerFeatureAdd
{
    public static function call(ApiErrorHandlerContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
