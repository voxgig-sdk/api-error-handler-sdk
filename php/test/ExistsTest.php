<?php
declare(strict_types=1);

// ApiErrorHandler SDK exists test

require_once __DIR__ . '/../apierrorhandler_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = ApiErrorHandlerSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
