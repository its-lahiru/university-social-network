import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

const microserviceOptions: MicroserviceOptions = {
  transport: Transport.REDIS,
  options: {
    url: 'redis://localhost:6379',
  }
}

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    microserviceOptions
  );
  app.listen(() => console.log('Notice microservice is started..'));

  // const app = await NestFactory.create(AppModule);
  // app.listen(3040, () => console.log('Notice microservice is started..'));
}
bootstrap();