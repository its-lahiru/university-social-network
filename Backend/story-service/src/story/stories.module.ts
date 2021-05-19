import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StoryRepository } from './repository/Story.repository';
import { StoryController } from './stories.controller';
import { Story, StorySchema } from './schema/Story.schema';
import { StoryService } from './stories.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Story.name, schema: StorySchema }]),
  ],
  controllers: [StoryController],
  providers: [StoryService, StoryRepository],
})
export class StoryModule {}
