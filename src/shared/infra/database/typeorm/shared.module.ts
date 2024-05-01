import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

//Models
import { User } from 'src/users/infrastructure/database/type-orm/user.model';
import { Book } from 'src/books/infrastructure/database/type-orm/book.model';

import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: 'meu_banco_teste',
      entities: [User, Book], //TypeOrm entity = Models
      migrations: [`${__dirname}/migrations/*{.ts,.js}`],
      migrationsRun: true,
      //synchronize: true,
    }),
  ],
})
export class SharedModule {}
