import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { DatabaseModule } from './database.module';
import { UserModule } from './user/user.module';
import { UploadModule } from './upload/upload.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'myapp',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    UploadModule,
    LoginModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: '123456',
    //   database: 'myapp',
    //   autoLoadEntities: true,
    //   synchronize: true,
    // }),
    AppModule
  ]
})
export class AppModule { }
