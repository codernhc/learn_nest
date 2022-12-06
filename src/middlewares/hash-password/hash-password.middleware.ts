import { Injectable, NestMiddleware } from '@nestjs/common';
import { addSalt, encript } from 'src/utils/encription';

@Injectable()
export class HashPasswordMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log("req", req.body)

    let userPassword = req.body['password']
    const salt = addSalt()
    if (userPassword) {
      userPassword = encript(userPassword, salt)
      req.body['password'] = userPassword
      req.body['salt'] = salt
    }
    // console.log(req.body['password']);
    next();
  }
}
