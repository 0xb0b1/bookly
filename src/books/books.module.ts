import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksController } from './books.controller';
import { BooksEntity } from './entities/books.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BooksEntity])],
  providers: [BooksService],
  controllers: [BooksController],
})
export class BooksModule {}
