/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class UserLogin {
    @ApiProperty({ type: String })
    email: string;

    @ApiProperty({ type: String })
    userName: string;

    @ApiProperty({ type: String })
    token: string;

    @ApiProperty({ type: String })
    password: string;
}
export class UserRegister {
    @ApiProperty({ type: String })
    email: string;
    @ApiProperty({ type: String })
    userName: string;

    @ApiProperty({ type: String })
    password: string;
    @ApiProperty({ type: String })
    token: string;
}