import { IsPhoneNumber, IsStrongPassword } from "class-validator"

export class CreateLoginDto {
  @IsPhoneNumber("CN")
  phone: string

  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 0,
    minNumbers: 1,
    minSymbols: 0,
})
  password: string
}
