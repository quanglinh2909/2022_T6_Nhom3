import { PartialType } from '@nestjs/swagger';
import { CreateDateDimDto } from './create-date-dim.dto';

export class UpdateDateDimDto extends PartialType(CreateDateDimDto) {}
