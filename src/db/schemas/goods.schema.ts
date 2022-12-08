import { SchemaFactory } from "@nestjs/mongoose";
import { Goods } from "src/interfaces/goods.interfacs";

export const GoodsSchema = SchemaFactory.createForClass(Goods)
