import { Injectable } from '@nestjs/common';
import { IBookRepository } from 'src/books/domain/book.repository';

import { Book } from './book.model';
import { User } from 'src/users/infrastructure/database/type-orm/user.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BookTypeOrmRepository implements IBookRepository {
  constructor(
    @InjectRepository(Book) private bookRepository: Repository<Book>,
  ) {}

  async create(input: any, user: any) {
    const userRelated = user;
    const newBook = new Book();

    newBook.book_id = String(Date.now());
    newBook.type_of = input?.type_of;
    newBook.value = input?.value;
    newBook.user = userRelated;
    newBook.createdAt = new Date();

    console.log(newBook);
    await this.bookRepository.save(newBook);
  }

  delete(book_id: string) {
    console.log(book_id);
  }
}
