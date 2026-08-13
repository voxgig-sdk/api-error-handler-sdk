# ApiErrorHandler SDK feature factory

from apierrorhandler_sdk.feature.base_feature import ApiErrorHandlerBaseFeature
from apierrorhandler_sdk.feature.test_feature import ApiErrorHandlerTestFeature


def _make_feature(name):
    features = {
        "base": lambda: ApiErrorHandlerBaseFeature(),
        "test": lambda: ApiErrorHandlerTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
