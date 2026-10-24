import { LogoGenerationEntity } from './entity/LogoGenerationEntity';
export type * from './ApiErrorHandlerTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { ApiErrorHandlerEntityBase } from './ApiErrorHandlerEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class ApiErrorHandlerSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    LogoGeneration(entopts?: Record<string, any>): LogoGenerationEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): ApiErrorHandlerSDK;
    tester(testopts?: any, sdkopts?: any): ApiErrorHandlerSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof ApiErrorHandlerSDK;
export { stdutil, config, BaseFeature, ApiErrorHandlerEntityBase, ApiErrorHandlerSDK, SDK, };
export type { DirectResult };
