import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
@ApiTags("App Modules")
export class AppController {
  constructor(private readonly appService: AppService) { }

  // @Get()
  // @ApiOperation({
  //   summary: "Test API"
  // })
  // @ApiTags("get hello")
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
