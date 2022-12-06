import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/interfaces/user.interface';
// import { UserModule } from './user.module';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('USER_MODEL') private readonly UserModule: Model<User>
  ) {

  }

  /**
   * 注册方法
   * @param user 
   * @returns 
   */
  public async regist(user: User) {
    return this.UserModule.find({
      username: user.username,
      // password: user.password
    }).then(res => {
      console.log(res);
      if (res.length) {
        console.log('该用户已经注册');
        throw Error("用户已注册")
      }
    }).then(() => {
      try {
        const createUser = new this.UserModule(user)
        return createUser.save()
      } catch (error) {
        throw Error("报错用户失败" + error)
      }
    }).catch(err => {
      console.warn("发生问题----" + err)
    })
  }
}
