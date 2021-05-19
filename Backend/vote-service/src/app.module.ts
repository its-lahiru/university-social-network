import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DB_CONNECTION } from './app.properties';
import { VotesModule } from './votes/votes.module';

@Module({
  imports: [
    VotesModule,
    MongooseModule.forRoot(DB_CONNECTION, { autoCreate: true }),
  ],
})
export class AppModule {}
