import { Injectable } from '@nestjs/common';
import { IBookRepository } from 'src/books/domain/book.repository';

import { Book } from './book.model';
//import { UserEntity } from 'src/users/domain/entities/user.entity';
import { User } from 'src/users/infrastructure/database/type-orm/user.model';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Connection } from 'mysql2';

@Injectable()
export class BookTypeOrmRepository implements IBookRepository {
  constructor(
    @InjectRepository(Book) private bookRepository: Repository<Book>,
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectDataSource() private readonly connection: Connection, //@InjectDataSource() private readonly connection: Connection,
  ) {}

  async create(input: any) {
    const newBook = new Book();

    const user = await this.findUser(input?.user_id);

    console.log(user);

    newBook.book_id = String(Date.now());
    newBook.type_of = input?.type_of;
    newBook.value = input?.value;
    newBook.user = user;
    newBook.createdAt = new Date();

    console.log(newBook);
    await this.bookRepository.save(newBook);
  }

  delete(book_id: string) {
    console.log(book_id);
  }

  private async findUser(user_id: string) {
    const user = await this.userRepository.findOne({
      where: {
        user_id,
      },
    });

    return user;
  }
}
