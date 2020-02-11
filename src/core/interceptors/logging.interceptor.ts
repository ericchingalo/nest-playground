import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, call$: CallHandler): Observable<any> {
    // TODO change the console logs to database logs
    console.log('Begin logging...');
    const now = Date.now();

    return call$
      .handle()
      .pipe(
        tap(() => console.log(`Finished Logging after ${Date.now() - now}ms`)),
      );
  }
}
