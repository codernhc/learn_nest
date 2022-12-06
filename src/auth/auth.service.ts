import { Injectable } from '@nestjs/common';
import { User } from 'src/interfaces/user.interface';
import { UserService } from 'src/modules/user/user.service';
import { encript } from 'src/utils/encription';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  response: { code: number; msg: string; };

  constructor(
    private readonly userService: UserService
  ) { }

  private async validateUser(user: User) {
    const phone: string = user.username
    const password: string = user.password
    this.userService.findOneByPhone(phone).then((res) => {
      if (!res.length) {
        this.response = {
          code: 403,
          msg: "用户尚未注册"
        }
        const dbUser: User = res[0]
        return dbUser
      }
    }).then((dbUser: User) => {
      const pass = encript(password, dbUser.salt)
      if (pass == dbUser.password) {
        this.response = {
          code: 200,
          msg: "登陆成功"
        }
      } else {
        this.response = {
          code: 500,
          msg: "用户名或密码错误"
        }
        throw this.response
      }
    }).catch(err => err)
  }

  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
