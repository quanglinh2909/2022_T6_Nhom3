import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DataFacService } from './data-fac.service';
import { CreateDataFacDto } from './dto/create-data-fac.dto';
import { SearchDataAreaDto, SearchDataProvinceDto } from './dto/search-data-fac.dto';
import { UpdateDataFacDto } from './dto/update-data-fac.dto';

@Controller('data-fac')
export class DataFacController {
    constructor(private readonly dataFacService: DataFacService) {}

    @ApiTags('Fact Manager')
    @Post()
    async create(@Body() createDataFacDto: CreateDataFacDto) {
        return await this.dataFacService.create(createDataFacDto);
    }

    @ApiTags('Fact Manager')
    @Get()
    async findAll() {
        return await this.dataFacService.findAll();
    }

    @ApiTags('Fact Manager')
    @Get('/search/area')
    async searchByArea(@Query() searchDataAreaFactDto: SearchDataAreaDto) {
        return await this.dataFacService.searchByArea(searchDataAreaFactDto);
    }

    @ApiTags('Fact Manager')
    @Get('/home')
    async home() {
        return await this.dataFacService.home();
    }

    @ApiTags('Fact Manager')
    @Get('/search/province')
    async searchByProvince(@Query() searchDataProvinceDto: SearchDataProvinceDto) {
        return await this.dataFacService.searchByProvince(searchDataProvinceDto);
    }

    @ApiTags('Fact Manager')
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.dataFacService.findOne(+id);
    }

    @ApiTags('Fact Manager')
    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateDataFacDto: UpdateDataFacDto) {
        return await this.dataFacService.update(+id, updateDataFacDto);
    }

    @ApiTags('Fact Manager')
    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.dataFacService.remove(+id);
    }
}
