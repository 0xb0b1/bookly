import { PartialType } from '@nestjs/mapped-types';
import { CreateRatingDto } from './create-rating.dto';

export class UpdateRatignDto extends PartialType(CreateRatingDto) {
  rate: number;
}
