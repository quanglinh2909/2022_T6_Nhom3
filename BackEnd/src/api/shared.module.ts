/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AreaDimModule } from './area-dim/area-dim.module';
import { ProvinceDimModule } from './province-dim/province-dim.module';
import { PrizeDimModule } from './prize-dim/prize-dim.module';
import { DateDimModule } from './date-dim/date-dim.module';
import { DataFacModule } from './data-fac/data-fac.module';
const REUSE_LIST = [AreaDimModule, ProvinceDimModule, PrizeDimModule, DateDimModule];
@Module({
    imports: [...REUSE_LIST, DataFacModule],
    exports: [...REUSE_LIST],
    controllers: [],
    providers: [],
})
export class SharedModule {}
