<?php
declare(strict_types=1);

// ApiErrorHandler SDK base feature

class ApiErrorHandlerBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(ApiErrorHandlerContext $ctx, array $options): void {}
    public function PostConstruct(ApiErrorHandlerContext $ctx): void {}
    public function PostConstructEntity(ApiErrorHandlerContext $ctx): void {}
    public function SetData(ApiErrorHandlerContext $ctx): void {}
    public function GetData(ApiErrorHandlerContext $ctx): void {}
    public function GetMatch(ApiErrorHandlerContext $ctx): void {}
    public function SetMatch(ApiErrorHandlerContext $ctx): void {}
    public function PrePoint(ApiErrorHandlerContext $ctx): void {}
    public function PreSpec(ApiErrorHandlerContext $ctx): void {}
    public function PreRequest(ApiErrorHandlerContext $ctx): void {}
    public function PreResponse(ApiErrorHandlerContext $ctx): void {}
    public function PreResult(ApiErrorHandlerContext $ctx): void {}
    public function PreDone(ApiErrorHandlerContext $ctx): void {}
    public function PreUnexpected(ApiErrorHandlerContext $ctx): void {}
}
