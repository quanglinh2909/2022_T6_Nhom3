/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

export class CardDto {
    @ApiProperty({ type: String })
    idProduct: string

    @ApiProperty({ type: Number })

    idUser: number

    @ApiProperty({ type: Number })

    quantity: number


    @ApiProperty({ type: String })

    size: string


}
