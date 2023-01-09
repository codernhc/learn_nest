import { Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { isOk } from 'src/utils/encryption';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) { }
  createToken(user: Partial<LoginAuthDto>) {
    return this.jwtService.sign(user);
  }

  async login(user: Partial<LoginAuthDto>) {
    const res = await this.userService.findOne(user.phone)
    if (res) {
      // console.log(res);
      try {
        if (isOk(user.password, res.password)) {
          const token = this.createToken({
            id: user.id,
            phone: user.phone,
          });
          return { token };
        } else {
          return {
            message: "用户名或密码错误"
          }
        }
      } catch (error) {
        return {
          message: error
        }
      }

    } else {
      return {
        message: "用户不存在，请注册"
      }
    }
  }
}
