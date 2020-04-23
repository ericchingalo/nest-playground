import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './core/filters/http-exception.filters';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // to set global filter
  // app.useGlobalFilters(new HttpExceptionFilter());
  // app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
