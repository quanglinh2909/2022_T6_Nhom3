import { PartialType } from '@nestjs/swagger';
import { CreatePrizeDimDto } from './create-prize-dim.dto';

export class UpdatePrizeDimDto extends PartialType(CreatePrizeDimDto) {}
