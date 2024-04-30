import { Injectable } from '@nestjs/common';
import { IBookRepository } from 'src/books/domain/book.entity';

import { Book } from './book.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BookTypeOrmRepository implements IBookRepository {
  constructor(
    @InjectRepository(Book) private bookRepository: Repository<Book>,
  ) {}

  create(input: any) {
    console.log(input);
  }

  delete(book_id: string) {
    console.log(book_id);
  }
}
