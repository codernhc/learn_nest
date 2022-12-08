import { Body, Controller, Get, Post, SetMetadata, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBasicAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from 'src/interfaces/user.interface';
import { Role } from '../role/role.decorator';
import { UserService } from './user.service';

@Controller('user')
@ApiTags("User Model")
@UseGuards(AuthGuard('jwt'))
@ApiBasicAuth('jwt')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('regist')
  @ApiOperation({
    summary: "用户进行注册"
  })
  async regist(@Body() userDto: User) {
    return await this.userService.regist(userDto);
  }

  @Get("hello")
  @Role('admin')
  // @SetMetadata("roles", ['admin'])
  hello() {
    return "hello world"
  }
}
