import { Document } from "mongoose";
export declare class User extends Document {
    readonly username: string;
    readonly password: string;
}
