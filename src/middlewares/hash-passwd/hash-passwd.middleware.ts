import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { hashPassword } from 'src/utils/encryption';

@Injectable()
export class HashPasswdMiddleware implements NestMiddleware {
  use(req: Request, _: Response, next: NextFunction) {
    console.log("req", req.body)

    let userPassword = req.body['password']
    if (userPassword) {
      userPassword = hashPassword(userPassword)
      req.body['password'] = userPassword
    }
    next();
  }
}
