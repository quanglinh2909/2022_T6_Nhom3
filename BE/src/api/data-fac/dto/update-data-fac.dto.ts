import { PartialType } from '@nestjs/swagger';
import { CreateDataFacDto } from './create-data-fac.dto';

export class UpdateDataFacDto extends PartialType(CreateDataFacDto) {}
