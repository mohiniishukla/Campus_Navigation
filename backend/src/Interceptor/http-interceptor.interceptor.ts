import { CallHandler, ExecutionContext, Inject, Injectable, LoggerService, NestInterceptor } from '@nestjs/common';
const moment = require('moment');
import { catchError, Observable, tap, throwError } from 'rxjs';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

@Injectable()
export class HttpInterceptorInterceptor implements NestInterceptor {
  constructor(@Inject(WINSTON_MODULE_NEST_PROVIDER)
  private logger: LoggerService){}
  intercept(context: ExecutionContext, next: CallHandler):Observable<any> {

    const now = Date.now();
    const request = context.switchToHttp().getRequest();
    const method = request.method;
    const url = request.originalUrl;
    return next.handle().pipe(
      tap((res) => {
        const response = context.switchToHttp().getResponse();
        const delay = Date.now() - now;
        this.logger.log(
          `${moment(now)} | ${response.statusCode} | [${method}] ${url} - ${delay}ms ${JSON.stringify(
            request.body,
          )}}`,
        );
      },catchError((error)=>{
        const delay = Date.now() - now;
        this.logger.error(
          `${moment(now)} | ${error.response?.statusCode} | [${method}] ${url} - ${delay}ms ${JSON.stringify(
            request.body,
          )} ${JSON.stringify(error)}`,
        );

        return throwError(error);
      })),
    )
  }
}
