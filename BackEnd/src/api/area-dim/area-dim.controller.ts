import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AreaDimService } from './area-dim.service';
import { CreateAreaDimDto } from './dto/create-area-dim.dto';
import { UpdateAreaDimDto } from './dto/update-area-dim.dto';

@Controller('area-dim')
export class AreaDimController {
    constructor(private readonly areaDimService: AreaDimService) {}

    @Post()
    async create(@Body() createAreaDimDto: CreateAreaDimDto) {
        return await this.areaDimService.create(createAreaDimDto);
    }

    @Get()
    async findAll() {
        return await this.areaDimService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.areaDimService.findOne(+id);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateAreaDimDto: UpdateAreaDimDto) {
        return await this.areaDimService.update(+id, updateAreaDimDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.areaDimService.remove(+id);
    }
}
