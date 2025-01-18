import { RatingEntity } from 'src/rating/entities/rating.entity';
import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'books' })
export class BooksEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  isbn: string;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column({ name: 'book_image' })
  bookImage: string;

  @Column()
  pages: number;

  @Column()
  category: string;

  @Column()
  date: Date;

  @OneToMany(() => RatingEntity, (rating) => rating.user)
  ratings: RatingEntity[];
}
