import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IResponse } from 'src/interfaces/response.interfacs';
import { User } from 'src/interfaces/user.interface';
// import { UserModule } from './user.module';

const logger = new Logger("user.service")

@Injectable()
export class UserService {
  private response: IResponse;

  constructor(
    @InjectModel('USER_MODEL') private readonly userModule: Model<User>
  ) { }

  /**
   * 注册方法
   * @param user 
   * @returns 
   */
  public async regist(user: User) {
    return await this.findOneByPhone(user.username)
      .then(res => {
        if (res.length !== 0) {
          // console.log(res)
          this.response = {
            code: 401,
            msg: "当前手机号已注册"
          }
          throw this.response
        }
      })
      .then(async () => {
        try {
          const createUser = new this.userModule(user)
          await createUser.save()
          this.response = {
            code: 200,
            msg: "用户注册成功 !!"
          }
          return this.response
        } catch (error) {
          this.response = {
            code: 402,
            msg: "用户注册失败，请联系管理员" + error
          }
          throw this.response
        }
      })
      .catch(() => {
        logger.log(this.response.msg)
        return this.response
      })
  }

  public async findOneByPhone(phone: string): Promise<any>  {
    return await this.userModule.find({
      username: phone
    })
  }
}
