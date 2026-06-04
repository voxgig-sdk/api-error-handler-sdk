<?php
declare(strict_types=1);

// LogoGeneration entity test

require_once __DIR__ . '/../apierrorhandler_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class LogoGenerationEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = ApiErrorHandlerSDK::test(null, null);
        $ent = $testsdk->LogoGeneration(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = logo_generation_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "logo_generation." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set APIERRORHANDLER_TEST_LOGO_GENERATION_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $logo_generation_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.logo_generation")));
        $logo_generation_ref01_data = null;
        if (count($logo_generation_ref01_data_raw) > 0) {
            $logo_generation_ref01_data = Helpers::to_map($logo_generation_ref01_data_raw[0][1]);
        }

        // LOAD
        $logo_generation_ref01_ent = $client->LogoGeneration(null);
        $logo_generation_ref01_match_dt0 = [];
        [$logo_generation_ref01_data_dt0_loaded, $err] = $logo_generation_ref01_ent->load($logo_generation_ref01_match_dt0, null);
        $this->assertNull($err);
        $this->assertNotNull($logo_generation_ref01_data_dt0_loaded);

    }
}

function logo_generation_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/logo_generation/LogoGenerationTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = ApiErrorHandlerSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["logo_generation01", "logo_generation02", "logo_generation03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("APIERRORHANDLER_TEST_LOGO_GENERATION_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "APIERRORHANDLER_TEST_LOGO_GENERATION_ENTID" => $idmap,
        "APIERRORHANDLER_TEST_LIVE" => "FALSE",
        "APIERRORHANDLER_TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["APIERRORHANDLER_TEST_LOGO_GENERATION_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["APIERRORHANDLER_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
            ],
            $extra ?? [],
        ]);
        $client = new ApiErrorHandlerSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["APIERRORHANDLER_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["APIERRORHANDLER_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
