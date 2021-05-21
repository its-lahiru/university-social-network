import { Module } from '@nestjs/common';
import { StudentsModule } from './students/students.module';
import { StoriesModule } from './stories/stories.module';
import { NoticesModule } from './notices/notices.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { VotesModule } from './votes/votes.module';

@Module({
  imports: [
    StudentsModule,
    StoriesModule,
    NoticesModule,
    VotesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
