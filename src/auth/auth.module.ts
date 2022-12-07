import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/modules/user/user.service';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './jwt.constant';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstants.secret
    })
  ],
  controllers: [
    AuthController
  ],
  providers: [
    AuthService,
    UserService,
    JwtStrategy
  ]
})
export class AuthModule { }
