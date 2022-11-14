/* eslint-disable prettier/prettier */
import { BannerEntity } from '@/entities/banner.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BannerService {
    constructor(
        @InjectRepository(BannerEntity)
        private bannerRepository: Repository<BannerEntity>
    ) { }
    async getAll(): Promise<BannerEntity[]> {
        return await this.bannerRepository.find();
    }
}
