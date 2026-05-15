# ProjectName SDK exists test

import pytest
from apierrorhandler_sdk import ApiErrorHandlerSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = ApiErrorHandlerSDK.test(None, None)
        assert testsdk is not None
