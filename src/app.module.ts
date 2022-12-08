import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { UserModule } from './modules/user/user.module';
// import { AuthModule } from './auth/auth.module';
import { AuthModule } from './auth/auth.module';
import { GoodsModule } from './modules/goods/goods.module';

@Module({
  imports: [DbModule, UserModule, AuthModule, GoodsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
