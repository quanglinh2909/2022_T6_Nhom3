import { ProvinceDimEntity } from '@/entities/province-dim.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProvinceDimDto } from './dto/create-province-dim.dto';
import { UpdateProvinceDimDto } from './dto/update-province-dim.dto';

@Injectable()
export class ProvinceDimService {
    constructor(
        @InjectRepository(ProvinceDimEntity)
        private provinceDimRepository: Repository<ProvinceDimEntity>
    ) {}
    create(createProvinceDimDto: CreateProvinceDimDto) {
        return 'This action adds a new provinceDim';
    }

    async findAll() {
        return await this.provinceDimRepository.find();
    }

    async findOne(id: number) {
        return await this.provinceDimRepository.findOne({ where: { id: id } });
    }

    async update(id: number, updateProvinceDimDto: UpdateProvinceDimDto) {
        return await `This action updates a #${id} provinceDim`;
    }

    async remove(id: number) {
        return await `This action removes a #${id} provinceDim`;
    }
}
