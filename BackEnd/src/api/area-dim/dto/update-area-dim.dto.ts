import { PartialType } from '@nestjs/swagger';
import { CreateAreaDimDto } from './create-area-dim.dto';

export class UpdateAreaDimDto extends PartialType(CreateAreaDimDto) {}
