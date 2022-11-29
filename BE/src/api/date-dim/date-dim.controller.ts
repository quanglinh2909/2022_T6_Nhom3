import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DateDimService } from './date-dim.service';
import { CreateDateDimDto } from './dto/create-date-dim.dto';
import { UpdateDateDimDto } from './dto/update-date-dim.dto';

@Controller('date-dim')
export class DateDimController {
    constructor(private readonly dateDimService: DateDimService) {}

    @ApiTags('Date dim Manager')
    @Post()
    create(@Body() createDateDimDto: CreateDateDimDto) {
        return this.dateDimService.create(createDateDimDto);
    }

    @ApiTags('Date dim Manager')
    @Get()
    findAll() {
        return this.dateDimService.findAll();
    }

    @ApiTags('Date dim Manager')
    @Get(':date')
    findOne(@Param('date') date: string) {
        return this.dateDimService.findOne(date);
    }

    @ApiTags('Date dim Manager')
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateDateDimDto: UpdateDateDimDto) {
        return this.dateDimService.update(id, updateDateDimDto);
    }

    @ApiTags('Date dim Manager')
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.dateDimService.remove(id);
    }
}
