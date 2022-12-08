import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

const listenPost = 3000;
const logger = new Logger('main.ts')
const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  app.enableCors()

  const config = new DocumentBuilder()
    .setTitle('shop API Documentation')
    .setDescription('shop API Documentation')
    .setVersion('1.0')
    .addTag('Shop Project Application Programming Interface')
    .addBearerAuth({
      type: "http",
      scheme: "bearer",
      bearerFormat: "JWT",
    }, "jwt")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // logger.log(`listen in http://localhost:${listenPost}`)
  await app.listen(listenPost);
}

bootstrap().then(() => {
  logger.log(`listen in http://localhost:${listenPost}/api`)
})