import { Context } from './Context';
declare class ApiErrorHandlerError extends Error {
    isApiErrorHandlerError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { ApiErrorHandlerError };
