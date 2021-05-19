import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';

const microserviceOptions: MicroserviceOptions = {
  transport: Transport.REDIS,
  options: {
    url: 'redis://localhost:6379',
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    microserviceOptions,
  );
  // app.useGlobalPipes(new ValidationPipe());
  app.listen(() => console.log('Student microservice is started..'));

  // const app = await NestFactory.create(AppModule);
  // app.listen(3001, () => console.log('Student service is started on port 3001...'));
}

bootstrap();
