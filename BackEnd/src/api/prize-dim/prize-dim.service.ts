import { PrizeDimEntity } from '@/entities/prize-dim.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePrizeDimDto } from './dto/create-prize-dim.dto';
import { UpdatePrizeDimDto } from './dto/update-prize-dim.dto';

@Injectable()
export class PrizeDimService {
    constructor(
        @InjectRepository(PrizeDimEntity)
        private prizeDimRepository: Repository<PrizeDimEntity>
    ) {}
    async create(createPrizeDimDto: CreatePrizeDimDto) {
        return await 'This action adds a new prizeDim';
    }

    async findAll() {
        return await this.prizeDimRepository.find();
    }

    async findOne(id: number) {
        return await this.prizeDimRepository.findOne({ where: { id: id } });
    }

    async update(id: number, updatePrizeDimDto: UpdatePrizeDimDto) {
        return await `This action updates a #${id} prizeDim`;
    }

    async remove(id: number) {
        return await `This action removes a #${id} prizeDim`;
    }
}
