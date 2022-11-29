import { Module } from '@nestjs/common';
import { ProvinceDimService } from './province-dim.service';
import { ProvinceDimController } from './province-dim.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvinceDimEntity } from '@/entities/province-dim.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ProvinceDimEntity])],
    controllers: [ProvinceDimController],
    providers: [ProvinceDimService],
})
export class ProvinceDimModule {}
