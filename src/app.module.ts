import { Module } from '@nestjs/common';
import { UsersModule } from './users/infrastructure/users.module';

import { SharedModule } from './shared/infrastrcture/typeorm/shared.module';
import { BooksModule } from './books/infrastructure/books.module';

@Module({
  imports: [UsersModule, SharedModule, BooksModule],
})
export class AppModule {}
