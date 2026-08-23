# ApiErrorHandler SDK feature factory

from apierrorhandler_sdk.feature.base_feature import ApiErrorHandlerBaseFeature
from apierrorhandler_sdk.feature.test_feature import ApiErrorHandlerTestFeature


_FEATURES = {
    "base": lambda: ApiErrorHandlerBaseFeature(),
    "test": lambda: ApiErrorHandlerTestFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
