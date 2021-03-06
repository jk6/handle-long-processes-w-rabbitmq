import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqp://guest:guest@localhost'
      ],
      queue: 'rabbit-mq-nest-js',
      noAck: false,
      prefetchCount: 1
    }
  });
  await app.listen();
}
bootstrap();
