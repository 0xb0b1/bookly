import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateBookTable1737073690114 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE books (
        id INT PRIMARY KEY AUTO_INCREMENT,
        isbn VARCHAR(20) UNIQUE,
        title VARCHAR(255),
        author VARCHAR(100),
        book_image VARCHAR(255),
        pages INT,
        category VARCHAR(100),
        description TEXT,
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE books;`);
  }
}
