# ApiErrorHandler SDK utility: make_context

from projectname_sdk.core.context import ApiErrorHandlerContext


def make_context_util(ctxmap, basectx):
    return ApiErrorHandlerContext(ctxmap, basectx)
