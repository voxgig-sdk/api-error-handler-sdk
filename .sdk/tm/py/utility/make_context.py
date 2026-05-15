# ApiErrorHandler SDK utility: make_context

from core.context import ApiErrorHandlerContext


def make_context_util(ctxmap, basectx):
    return ApiErrorHandlerContext(ctxmap, basectx)
