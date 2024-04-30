import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { Book } from './database/type-orm/book.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookTypeOrmRepository } from './database/type-orm/book.repository';
import { CreateBookOrder } from '../application/usecases/createBookOrder.usecase';
import { UsersModule } from 'src/users/infrastructure/users.module';
import { UserTypeOrmRepository } from 'src/users/infrastructure/database/type-orm/user.repository';

@Module({
  controllers: [BooksController],
  imports: [TypeOrmModule.forFeature([Book]), UsersModule],
  providers: [
    BookTypeOrmRepository,
    CreateBookOrder,
    {
      provide: 'type_repo',
      useExisting: BookTypeOrmRepository,
    },

    {
      provide: 'teste',
      useExisting: UserTypeOrmRepository,
    },
  ],
})
export class BooksModule {}
