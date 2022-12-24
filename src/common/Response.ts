import { CallHandler, ExecutionContext, HttpStatus, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, map } from "rxjs";

interface Date<T> {
  data: T
}

@Injectable()
class Response<T> implements NestInterceptor {
  intercept(_: ExecutionContext, next: CallHandler): Observable<Date<T>> {
    return next.handle().pipe(map(data => {
      return {
        data,
        status: HttpStatus.OK,
        messgae: "success",
        success: true,
      }
    }))
  }
}

export default Response
