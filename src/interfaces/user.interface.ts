import { Prop, Schema } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

@Schema()
export class User extends Document {
  @Prop()
  @ApiProperty({
    description: "用户名/手机号",
    example: "18912300045"
  })
  readonly username: string;

  @Prop()
  @ApiProperty({
    description: "用户密码",
    example: "123456"
  })
  readonly password: string;
}
