import { Module } from '@nestjs/common';
import { PrizeDimService } from './prize-dim.service';
import { PrizeDimController } from './prize-dim.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrizeDimEntity } from '@/entities/prize-dim.entity';

@Module({
    imports: [TypeOrmModule.forFeature([PrizeDimEntity])],
    controllers: [PrizeDimController],
    providers: [PrizeDimService],
})
export class PrizeDimModule {}
