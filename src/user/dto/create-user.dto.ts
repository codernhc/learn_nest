import { IsNumber, IsPhoneNumber, IsString, IsStrongPassword } from "class-validator";

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
}
