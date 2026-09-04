import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = Number(process.env.API_PORT ?? 3001);

  app.enableCors({
    credentials: true,
    origin: process.env.WEB_ORIGIN ?? 'http://localhost:3000',
  });

  await app.listen(port);
}

await bootstrap();
