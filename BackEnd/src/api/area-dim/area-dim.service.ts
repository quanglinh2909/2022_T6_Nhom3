import { AreaDimEntity } from '@/entities/area-dim.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAreaDimDto } from './dto/create-area-dim.dto';
import { UpdateAreaDimDto } from './dto/update-area-dim.dto';

@Injectable()
export class AreaDimService {
    constructor(
        @InjectRepository(AreaDimEntity)
        private areaDimRepository: Repository<AreaDimEntity>
    ) {}

    async create(createAreaDimDto: CreateAreaDimDto) {
        return await 'This action adds a new areaDim';
    }

    async findAll() {
        return await this.areaDimRepository.find();
    }

    async findOne(id: number) {
        return await this.areaDimRepository.findOne({ where: { id: id } });
    }

    async update(id: number, updateAreaDimDto: UpdateAreaDimDto) {
        return await `This action updates a #${id} areaDim`;
    }

    async remove(id: number) {
        return await `This action removes a #${id} areaDim`;
    }
}
