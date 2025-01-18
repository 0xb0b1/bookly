import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';

export class UpdateBookDto extends PartialType(CreateBookDto) {
  id: number;
  title: string;
  author: string;
  bookImage: string;
  pages: number;
  category: string;
}
