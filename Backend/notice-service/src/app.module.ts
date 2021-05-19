import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DB_CONNECTION } from './app.properties';
import { NoticesModule } from './notices/notices.module';

@Module({
  imports: [
    NoticesModule,
    MongooseModule.forRoot(DB_CONNECTION, { autoCreate: true }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
