import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.log(`SERVER ON PORT ${process.env.PORT}`);
  console.log(`ENV: ${process.env.ENV}`);
  await app.listen(Number(process.env.PORT));
}
bootstrap();
