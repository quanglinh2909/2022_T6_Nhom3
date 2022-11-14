/* eslint-disable prettier/prettier */
import { BannerEntity } from '@/entities/banner.entity';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BannerService } from './banner.service';

@Controller('banner')
export class BannerController {
    constructor(private readonly bannerService: BannerService) { }
    @ApiTags('banner')
    @Get('get-all')
    async getAll(): Promise<BannerEntity[]> {
        return await this.bannerService.getAll();
    }
}
