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
    .setTitle('shop项目管理平台')
    .setDescription('shop平台API Documentation')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // logger.log(`listen in http://localhost:${listenPost}`)
  await app.listen(listenPost);
}

bootstrap().then(() => {
  logger.log(`listen in http://localhost:${listenPost}/api`)
})