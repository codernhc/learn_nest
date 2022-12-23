import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { DatabaseModule } from './database.module';
import { UserModule } from './user/user.module';
import { UploadModule } from './upload/upload.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [UserModule, UploadModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
