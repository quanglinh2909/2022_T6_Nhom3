import { DateDimEntity } from '@/entities/date-dim.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDateDimDto } from './dto/create-date-dim.dto';
import { UpdateDateDimDto } from './dto/update-date-dim.dto';

@Injectable()
export class DateDimService {
    constructor(
        @InjectRepository(DateDimEntity)
        private dateDimRepository: Repository<DateDimEntity>
    ) {}
    async create(createDateDimDto: CreateDateDimDto) {
        return await 'This action adds a new dateDim';
    }

    async findAll() {
        return await this.dateDimRepository.find();
    }

    async findOne(date: string) {
        return await this.dateDimRepository.findOne({ where: { date: date } });
    }

    async update(id: string, updateDateDimDto: UpdateDateDimDto) {
        return await `This action updates a #${id} dateDim`;
    }

    async remove(id: string) {
        return await `This action removes a #${id} dateDim`;
    }
}
