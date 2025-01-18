import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateReadingListTable1737073685945 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE reading_list (
          user_id INT,
          book_id INT,
          status ENUM('A', 'D', 'P'),
          created_at timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
          updated_at timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
          PRIMARY KEY (user_id, book_id) USING BTREE,
          CONSTRAINT user_x_reading_ibfk_1 FOREIGN KEY (user_id) REFERENCES user(id),
          CONSTRAINT user_x_reading_book_ibfk_1 FOREIGN KEY (book_id) REFERENCES books(id)
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('DROP TABLE reading_list');
  }
}
