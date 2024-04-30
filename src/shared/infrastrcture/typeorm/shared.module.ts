import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

//Models
import { User } from 'src/users/infrastructure/database/type-orm/user.model';
import { Book } from 'src/books/infrastructure/database/type-orm/book.model';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'enzo',
      password: 'enzo1234',
      database: 'meu_banco_teste',
      entities: [User, Book], //TypeOrm entity = Models
      synchronize: true,
    }),
  ],
})
export class SharedModule {}
