import { IsNumber, IsString, MinLength } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @MinLength(20)
  isbn: string;

  @IsString()
  title: string;

  @IsString()
  author: string;

  @IsString()
  bookImage: string;

  @IsNumber()
  pages: number;

  @IsString()
  category: string;
}
