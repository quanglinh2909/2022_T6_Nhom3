import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProvinceDimService } from './province-dim.service';
import { CreateProvinceDimDto } from './dto/create-province-dim.dto';
import { UpdateProvinceDimDto } from './dto/update-province-dim.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('province-dim')
export class ProvinceDimController {
    constructor(private readonly provinceDimService: ProvinceDimService) {}
    @ApiTags('province dim Manager')
    @Post()
    async create(@Body() createProvinceDimDto: CreateProvinceDimDto) {
        return await this.provinceDimService.create(createProvinceDimDto);
    }

    @ApiTags('province dim Manager')
    @Get()
    async findAll() {
        return await this.provinceDimService.findAll();
    }

    @ApiTags('province dim Manager')
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.provinceDimService.findOne(+id);
    }

    @ApiTags('province dim Manager')
    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateProvinceDimDto: UpdateProvinceDimDto) {
        return await this.provinceDimService.update(+id, updateProvinceDimDto);
    }

    @ApiTags('province dim Manager')
    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.provinceDimService.remove(+id);
    }
}
