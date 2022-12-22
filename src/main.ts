import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common/services';
import * as session from 'express-session';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

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

  app.useStaticAssets(join(__dirname, "images"), {
    prefix: "/img"
  })
  await app.listen(3000);
}
bootstrap().then(() => {
  logger.log("Listening: http://localhost:3000")
})
