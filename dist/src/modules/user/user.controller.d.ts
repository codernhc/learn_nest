import { User } from 'src/interfaces/user.interface';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    regist(userDto: User): Promise<void | (User & {
        _id: import("mongoose").Types.ObjectId;
    })>;
}
