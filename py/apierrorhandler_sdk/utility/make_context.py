# ApiErrorHandler SDK utility: make_context

from apierrorhandler_sdk.core.context import ApiErrorHandlerContext


def make_context_util(ctxmap, basectx):
    return ApiErrorHandlerContext(ctxmap, basectx)
