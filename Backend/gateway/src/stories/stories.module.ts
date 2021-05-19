import { Module } from '@nestjs/common';
import { StoriesService } from './stories.service';
import { StoriesController } from './stories.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { JwtModule } from '@nestjs/jwt';
import { JwtSecret } from 'src/constants/jwt.secret';

@Module({
  imports: [
    JwtModule.register({
      secret: JwtSecret,
    }),
    ClientsModule.register([
      {
        name: 'STORIES_SERVICE',
        transport: Transport.REDIS,
        options: {
          url: 'redis://localhost:6379',
        },
      },
    ]),
  ],
  providers: [StoriesService],
  controllers: [StoriesController],
})
export class StoriesModule {}
