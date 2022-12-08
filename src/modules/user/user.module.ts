import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { HashPasswordMiddleware } from 'src/middlewares/hash-password/hash-password.middleware';

@Module({
  controllers: [
    UserController
  ],
  providers: [
    UserService,
  ],
  exports: [UserModule]
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(HashPasswordMiddleware)
      .forRoutes('user/regist')
  }
}
