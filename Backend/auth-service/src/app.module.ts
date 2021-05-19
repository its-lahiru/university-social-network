import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { JwtModule } from '@nestjs/jwt';
import { JwtSecret } from './constants/jwt.secret';

@Module({
  imports: [
    HttpModule,
    JwtModule.register({
      secret: JwtSecret,
      signOptions: {
        expiresIn: '30d',
      }
    }),
    ClientsModule.register([
      {
        name: 'STUDENT_SERVICE',
        transport: Transport.REDIS,
        options: {
          url: 'redis://localhost:6379',
        }
      }
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
