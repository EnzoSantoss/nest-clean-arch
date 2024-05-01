import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateBooksTable1714522618883 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE meu_banco_teste.book (
        book_id varchar(255) NOT NULL,
        type_of varchar(255) NOT NULL,
        value decimal(10,0) NOT NULL,
        createdAt datetime NOT NULL,
        user_id varchar(255) DEFAULT NULL,
        PRIMARY KEY (book_id),
        KEY FK_user_book (user_id),
        CONSTRAINT FK_user_book FOREIGN KEY (user_id) REFERENCES user (user_id)
      );  
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE meu_banco_teste.book;`);
  }
}

//npx typeorm migration:create ./src/shared/infra/database/typeorm/migrations/nome-do-script
