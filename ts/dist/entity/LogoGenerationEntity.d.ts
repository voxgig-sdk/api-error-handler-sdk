import { ApiErrorHandlerEntityBase } from '../ApiErrorHandlerEntityBase';
import type { ApiErrorHandlerSDK } from '../ApiErrorHandlerSDK';
import type { Control } from '../types';
import type { LogoGeneration, LogoGenerationLoadMatch } from '../ApiErrorHandlerTypes';
declare class LogoGenerationEntity extends ApiErrorHandlerEntityBase<LogoGeneration> {
    constructor(client: ApiErrorHandlerSDK, entopts: any);
    make(this: LogoGenerationEntity): LogoGenerationEntity;
    load(this: any, reqmatch?: LogoGenerationLoadMatch, ctrl?: Control): Promise<LogoGenerationEntity>;
}
export { LogoGenerationEntity };
