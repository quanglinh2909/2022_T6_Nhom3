import { Module } from '@nestjs/common';
import { DataFacService } from './data-fac.service';
import { DataFacController } from './data-fac.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataFacEntity } from '@/entities/data_fac.entity';
import { DateDimModule } from '../date-dim/date-dim.module';

@Module({
    imports: [TypeOrmModule.forFeature([DataFacEntity]), DateDimModule],
    controllers: [DataFacController],
    providers: [DataFacService],
})
export class DataFacModule {}
