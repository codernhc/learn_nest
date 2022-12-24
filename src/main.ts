import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

import Response from './common/Response';
import HttpFilters from './common/HttpFilters';

const logger = new Logger('AppModule')

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // somewhere in your initialization file
  app.use(
    session({
      secret: 'codernhc',
      name: "myapp.sid",
      rolling: true,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 9999999999
      }
    }),
  );

  app.useGlobalFilters(new HttpFilters())
  app.useGlobalInterceptors(new Response())
  app.useGlobalPipes(new ValidationPipe())

  app.useStaticAssets(join(__dirname, "images"), {
    prefix: "/img"
  })
  await app.listen(3000);
}

bootstrap().then(() => {
  logger.log("Listening: http://localhost:3000")
})
