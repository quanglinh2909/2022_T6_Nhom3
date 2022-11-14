/* eslint-disable prettier/prettier */
import { BannerEntity } from '@/entities/banner.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BannerController } from './banner.controller';
import { BannerService } from './banner.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([BannerEntity]),
  ],
  controllers: [BannerController],
  providers: [BannerService]
})
export class BannerModule { }
