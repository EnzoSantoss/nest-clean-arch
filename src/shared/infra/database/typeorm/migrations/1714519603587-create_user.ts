import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserBooksTables1714519603587 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE meu_banco_teste.user (
        user_id varchar(255) NOT NULL,
        name varchar(255) NOT NULL,
        age int NOT NULL,
        createdAt datetime NOT NULL,
        PRIMARY KEY (user_id)
      );  
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
    DROP TABLE meu_banco_teste.user;
    `);
  }
}

//npx typeorm migration:create ./src/shared/infra/database/typeorm/migrations/nome-do-script
