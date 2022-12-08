import { Prop, Schema } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

@Schema()
export class Goods extends Document {
  @Prop()
  @ApiProperty({
    description: "goodName",
    example: "Iphone"
  })
  readonly goodName: string;

  @Prop()
  @ApiProperty({
    description: "goodImg",
    example: ""
  })
  readonly goodImg: string;

  // @Prop()
  // readonly salt?: string
  // phone: string;
}
