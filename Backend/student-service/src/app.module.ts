import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DB_CONNECTION } from './app.properties';

import { StudentModule } from './student/students.module';

@Module({
  imports: [
    StudentModule,
    MongooseModule.forRoot(DB_CONNECTION, { autoCreate: true }),
  ],
})
export class AppModule {}
