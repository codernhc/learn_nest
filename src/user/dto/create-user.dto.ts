import { IsNumber, IsPhoneNumber, IsString, IsStrongPassword } from "class-validator";
import { Column } from "typeorm";

export class CreateUserDto {
  @IsPhoneNumber("CN")
  phone: string;

  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 0,
    minNumbers: 1,
    minSymbols: 1,
  })
  password: string;

  @IsString()
  code: string
  
  @Column({ length: 100 })
  username: string; // 用户名

  @Column({ length: 100 })
  nickname: string;  //昵称

  @Column()
  avatar: string;   //头像

  @Column()
  email: string;

}
