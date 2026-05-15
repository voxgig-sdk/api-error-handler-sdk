<?php
declare(strict_types=1);

// ApiErrorHandler SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class ApiErrorHandlerFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new ApiErrorHandlerBaseFeature();
            case "test":
                return new ApiErrorHandlerTestFeature();
            default:
                return new ApiErrorHandlerBaseFeature();
        }
    }
}
