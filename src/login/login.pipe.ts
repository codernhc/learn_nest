import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class LoginPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    // console.log(value, metadata)
    const Dto = plainToInstance(metadata.metatype, value)
    const error = await validate(Dto)
    if (error.length) {
      // console.log(error)
      throw new HttpException(error, HttpStatus.BAD_REQUEST)
    }
    return value;
  }
}
