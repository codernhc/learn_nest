import { Model } from 'mongoose';
import { User } from 'src/interfaces/user.interface';
export declare class UserService {
    private readonly UserModule;
    constructor(UserModule: Model<User>);
    regist(user: User): Promise<void | (User & {
        _id: import("mongoose").Types.ObjectId;
    })>;
}
