"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiErrorHandlerError = void 0;
class ApiErrorHandlerError extends Error {
    isApiErrorHandlerError = true;
    sdk = 'ApiErrorHandler';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.ApiErrorHandlerError = ApiErrorHandlerError;
//# sourceMappingURL=ApiErrorHandlerError.js.map