import { CallHandler, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, map } from "rxjs";

interface Date<T> {
  data: T
}

@Injectable()
class Response<T> implements NestInterceptor {
  intercept(context, next: CallHandler): Observable<Date<T>> {
    return next.handle().pipe(map(data => {
      return {
        data,
        status: 0,
        messgae: "success",
        success: true,
      }
    }))
  }
}

export default Response
