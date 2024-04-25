import { Module } from '@nestjs/common';
import { UsersModule } from './users/infrastructure/users.module';
//import { DatabaseModule } from './infrastructure/database/database.module';

import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './users/infrastructure/database/type-orm/user.model';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'enzo',
      password: 'enzo1234',
      database: 'meu_banco_teste',
      entities: [User], //TypeOrm entity = Models
      synchronize: true,
    }),
    UsersModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
