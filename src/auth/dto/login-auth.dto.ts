import { IsPhoneNumber } from "class-validator"
import { PrimaryGeneratedColumn } from "typeorm"

export class LoginAuthDto {
  @PrimaryGeneratedColumn()
  id:number

  @IsPhoneNumber("CN")
  phone: string

  password: string
}
