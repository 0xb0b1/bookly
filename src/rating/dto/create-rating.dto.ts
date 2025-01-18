import { IsNumber } from 'class-validator';

export class CreateRatingDto {
  @IsNumber()
  user_id: number;

  @IsNumber()
  book_id: number;

  @IsNumber()
  rate: number;
}
