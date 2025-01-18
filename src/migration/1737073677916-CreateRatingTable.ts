import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateRatingTable1737073677916 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE rating (
          user_id INT,
          book_id INT,
          rate INT,
          date DATE,
          created_at timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
          updated_at timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
          FOREIGN KEY (user_id) REFERENCES user(id),
          FOREIGN KEY (book_id) REFERENCES books(id)
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE rating;`);
  }
}
