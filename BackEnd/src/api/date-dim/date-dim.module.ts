import { Module } from '@nestjs/common';
import { DateDimService } from './date-dim.service';
import { DateDimController } from './date-dim.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DateDimEntity } from '@/entities/date-dim.entity';

@Module({
    imports: [TypeOrmModule.forFeature([DateDimEntity])],
    controllers: [DateDimController],
    providers: [DateDimService],
    exports: [DateDimService],
})
export class DateDimModule {}
