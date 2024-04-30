import { Module } from '@nestjs/common';
import { UsersModule } from './users/infrastructure/users.module';

import { SharedModule } from './shared/infrastrcture/typeorm/shared.module';

@Module({
  imports: [UsersModule, SharedModule],
})
export class AppModule {}
