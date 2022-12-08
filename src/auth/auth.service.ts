import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IResponse } from 'src/interfaces/response.interfacs';
import { User } from 'src/interfaces/user.interface';
import { UserService } from 'src/modules/user/user.service';
import { encript } from 'src/utils/encription';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  response: { code: number; msg: any; };
  
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) { }

  private async validateUser(user: User) {
    const phone: string = user.username
    const password: string = user.password
    return await this.userService.findOneByPhone(phone).then((res) => {
      if (!res.length) {
        this.response = { code: 403, msg: "用户尚未注册" }
        throw this.response
      }
      return res[0]
    }).then((dbUser: User) => {
      const pass = encript(password, dbUser.salt)
      if (pass == dbUser.password) {
        return this.response = { code: 200, msg: "登陆成功" }
      } else {
        this.response = { code: 500, msg: "用户名或密码错误" }
        throw this.response
      }
    }).catch(err => err)
  }

  public async login(user: User) {
    // return await this.validateUser(user).then(() => {
    //   return this.createToken(user)
    // })

    return await this.validateUser(user).then(async (res: IResponse) => {
      if (res.code !== 200) {
        throw this.response = res
      }
      const userid = res.msg.userid
      return this.response = {
        code: 200,
        msg: { token: await this.createToken(user), userid }
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

  private async createToken(user: User) {
    return await this.jwtService.sign(user)
  }
}
