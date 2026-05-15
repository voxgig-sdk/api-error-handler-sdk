<?php
declare(strict_types=1);

// ApiErrorHandler SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

ApiErrorHandlerUtility::setRegistrar(function (ApiErrorHandlerUtility $u): void {
    $u->clean = [ApiErrorHandlerClean::class, 'call'];
    $u->done = [ApiErrorHandlerDone::class, 'call'];
    $u->make_error = [ApiErrorHandlerMakeError::class, 'call'];
    $u->feature_add = [ApiErrorHandlerFeatureAdd::class, 'call'];
    $u->feature_hook = [ApiErrorHandlerFeatureHook::class, 'call'];
    $u->feature_init = [ApiErrorHandlerFeatureInit::class, 'call'];
    $u->fetcher = [ApiErrorHandlerFetcher::class, 'call'];
    $u->make_fetch_def = [ApiErrorHandlerMakeFetchDef::class, 'call'];
    $u->make_context = [ApiErrorHandlerMakeContext::class, 'call'];
    $u->make_options = [ApiErrorHandlerMakeOptions::class, 'call'];
    $u->make_request = [ApiErrorHandlerMakeRequest::class, 'call'];
    $u->make_response = [ApiErrorHandlerMakeResponse::class, 'call'];
    $u->make_result = [ApiErrorHandlerMakeResult::class, 'call'];
    $u->make_point = [ApiErrorHandlerMakePoint::class, 'call'];
    $u->make_spec = [ApiErrorHandlerMakeSpec::class, 'call'];
    $u->make_url = [ApiErrorHandlerMakeUrl::class, 'call'];
    $u->param = [ApiErrorHandlerParam::class, 'call'];
    $u->prepare_auth = [ApiErrorHandlerPrepareAuth::class, 'call'];
    $u->prepare_body = [ApiErrorHandlerPrepareBody::class, 'call'];
    $u->prepare_headers = [ApiErrorHandlerPrepareHeaders::class, 'call'];
    $u->prepare_method = [ApiErrorHandlerPrepareMethod::class, 'call'];
    $u->prepare_params = [ApiErrorHandlerPrepareParams::class, 'call'];
    $u->prepare_path = [ApiErrorHandlerPreparePath::class, 'call'];
    $u->prepare_query = [ApiErrorHandlerPrepareQuery::class, 'call'];
    $u->result_basic = [ApiErrorHandlerResultBasic::class, 'call'];
    $u->result_body = [ApiErrorHandlerResultBody::class, 'call'];
    $u->result_headers = [ApiErrorHandlerResultHeaders::class, 'call'];
    $u->transform_request = [ApiErrorHandlerTransformRequest::class, 'call'];
    $u->transform_response = [ApiErrorHandlerTransformResponse::class, 'call'];
});
