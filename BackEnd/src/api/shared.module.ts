/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { BannerModule } from './banner/banner.module';
const REUSE_LIST = [ BannerModule];
@Module({
    imports: [...REUSE_LIST,],
    exports: [...REUSE_LIST],
    controllers: [],
    providers: [],
})
export class SharedModule { }
