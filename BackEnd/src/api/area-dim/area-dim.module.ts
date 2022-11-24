import { Module } from '@nestjs/common';
import { AreaDimService } from './area-dim.service';
import { AreaDimController } from './area-dim.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AreaDimEntity } from '@/entities/area-dim.entity';

@Module({
    imports: [TypeOrmModule.forFeature([AreaDimEntity])],
    controllers: [AreaDimController],
    providers: [AreaDimService],
})
export class AreaDimModule {}
