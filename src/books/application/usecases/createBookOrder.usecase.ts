import { Inject, Injectable } from '@nestjs/common';
import { IBookRepository } from 'src/books/domain/book.repository';

//import { IUserRepository } from 'src/users/domain/repositories/user.repository';

@Injectable()
export class CreateBookOrder {
  constructor(
    @Inject('type_repo')
    private readonly bookRepository: IBookRepository, // @Inject('teste') // private readonly userRepository: IUserRepository,
  ) {}

  async execute(input: any) {
    //const user = await this.userRepository.findById(input?.user_id);
    this.bookRepository.create(input);
  }
}
