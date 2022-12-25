/* eslint-disable prettier/prettier */

import { ApiProperty } from '@nestjs/swagger';

export class SearchDataAreaDto {
    @ApiProperty()
    date: Date;

    @ApiProperty()
    area: number;
}
export class SearchDataProvinceDto {
    @ApiProperty()
    date: Date;

    @ApiProperty()
    province: number;
}
export class SearchNumberDto {
    @ApiProperty()
    number: string;

    @ApiProperty()
    date: Date;

    @ApiProperty()
    province: number;
}
