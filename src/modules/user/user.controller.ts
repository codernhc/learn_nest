import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from 'src/interfaces/user.interface';
import { UserService } from './user.service';

@Controller('user')
@ApiTags("用户模块")
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('regist')
  @ApiOperation({
    summary: "用户进行注册"
  })
  async regist(@Body() userDto: User) {
    return await this.userService.regist(userDto);
  }
}
