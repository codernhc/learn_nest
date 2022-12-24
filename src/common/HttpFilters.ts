import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Request, Response } from "express";

@Catch(HttpException)
class HttpFilters implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()

    const req = ctx.getRequest<Request>()
    const res = ctx.getResponse<Response>()
    const next = ctx.getNext()

    const status = exception.getStatus()
    console.log(exception)
    res.status(status).json({
      success: false,
      status,
      time: new Date(),
      message: exception.message,
      data: exception,
      path: req.url
    })
  }
}

export default HttpFilters