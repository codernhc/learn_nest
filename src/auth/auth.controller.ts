import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from 'src/interfaces/user.interface';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
@ApiTags('用户登录校验模块')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  @ApiOperation({
    summary: "用户登录",
  })
  public async userLogin(@Body() userDto: User) {
    return await this.authService.login(userDto)
  }
  // create(@Body() createAuthDto: CreateAuthDto) {
  //   return this.authService.create(createAuthDto);
  // }

  // @Get()
  // findAll() {
  //   return this.authService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.authService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
  //   return this.authService.update(+id, updateAuthDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authService.remove(+id);
  // }
}
