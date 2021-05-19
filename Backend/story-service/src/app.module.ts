import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DB_CONNECTION } from './app.properties';

import { StoryModule } from './story/stories.module';

@Module({
  imports: [
    StoryModule,
    MongooseModule.forRoot(DB_CONNECTION, { autoCreate: true }),
  ],
})
export class AppModule { }
