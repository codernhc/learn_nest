import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import * as svgCaptcha from 'svg-captcha';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  async findOne(phone: string): Promise<any> {
    return await this.usersRepository.find({
      where: {
        phone,
      },
    })
  }

  createCode() {
    const Captcha = svgCaptcha.create({
      size: 4,
      fontSize: 50,
      width: 100,
      height: 34,
      background: "#cc9966"
    })
    return Captcha
  }

  async verifyCode(user: CreateUserDto, session: { code: string; }) {
    const phone: string = user.phone
    const password: string = user.password

    if (session?.code?.toLocaleLowerCase() ?? undefined == user?.code?.toLocaleLowerCase() ?? undefined) {
      // console.log(createUserDto)
      const res = await this.findOne(phone)
      // console.log(res, "===========>")
      if (res.length) {
        return {
          code: HttpStatus.PRECONDITION_FAILED,
          message: "用户已注册"
        }
      } else {
        const data = new User()
        data.password = password
        data.phone = phone
        this.usersRepository.save(data)
        return {
          code: HttpStatus.CREATED,
          message: "用户注册成功"
        }
      }
    } else {
      return {
        code: HttpStatus.BAD_REQUEST,
        message: "验证码错误"
      }
    }
  }
}
