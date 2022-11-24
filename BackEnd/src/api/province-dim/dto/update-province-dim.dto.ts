import { PartialType } from '@nestjs/swagger';
import { CreateProvinceDimDto } from './create-province-dim.dto';

export class UpdateProvinceDimDto extends PartialType(CreateProvinceDimDto) {}
