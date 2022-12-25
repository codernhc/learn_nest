import { Body, Controller, Get, Post, Req, Res, Session } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('code')
  getCode(@Req() req, @Res() res, @Session() session) {
    const captcha = this.userService.createCode()
    session.code = captcha.text
    res.type("image/svg+xml")
    res.send(captcha.data)
  }

  @Post('create')
  create(@Body() createUserDto: CreateUserDto, @Session() session) {
    return this.userService.createUser(createUserDto,session)
    // if (session.code.toLocaleLowerCase() == createUserDto?.code?.toLocaleLowerCase()) {
    //   return {
    //     code: HttpStatus.OK,
    //     msg: "验证码正确"
    //   }
    // } else {
    //   return {
    //     code: HttpStatus.BAD_REQUEST,
    //     msg: "验证码错误"
    //   }
    // }
  }

  // @Get()
  // findAll() {
  //   return this.userService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(+id);
  // }
}
