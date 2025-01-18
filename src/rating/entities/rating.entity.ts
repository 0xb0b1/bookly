import { BooksEntity } from 'src/books/entities/books.entity';
import type { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserEntity } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'rating' })
export class RatingEntity {
  @PrimaryColumn()
  userId: number;

  @PrimaryColumn()
  bookId: number;

  @Column()
  rate: number;

  @Column({ type: 'date' })
  date: Date;

  @ManyToOne(() => UserEntity, (user) => user.ratings)
  user: CreateUserDto;

  @ManyToOne(() => BooksEntity, (book) => book.ratings)
  book: BooksEntity[];
}
