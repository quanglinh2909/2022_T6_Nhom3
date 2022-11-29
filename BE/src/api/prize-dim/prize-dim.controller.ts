import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrizeDimService } from './prize-dim.service';
import { CreatePrizeDimDto } from './dto/create-prize-dim.dto';
import { UpdatePrizeDimDto } from './dto/update-prize-dim.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('prize-dim')
export class PrizeDimController {
    constructor(private readonly prizeDimService: PrizeDimService) {}

    @ApiTags('prize dim Manager')
    @Post()
    async create(@Body() createPrizeDimDto: CreatePrizeDimDto) {
        return await this.prizeDimService.create(createPrizeDimDto);
    }

    @ApiTags('prize dim Manager')
    @Get()
    async findAll() {
        return await this.prizeDimService.findAll();
    }

    @ApiTags('prize dim Manager')
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.prizeDimService.findOne(+id);
    }

    @ApiTags('prize dim Manager')
    @Patch(':id')
    async update(@Param('id') id: string, @Body() updatePrizeDimDto: UpdatePrizeDimDto) {
        return await this.prizeDimService.update(+id, updatePrizeDimDto);
    }

    @ApiTags('prize dim Manager')
    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.prizeDimService.remove(+id);
    }
}
