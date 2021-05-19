import { Module } from '@nestjs/common';
import { VotesService } from './votes.service';
import { VotesController } from './votes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Vote, VoteSchema } from './schema/Vote.schema';
import { VoteRepository } from './repository/Vote.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Vote.name, schema: VoteSchema }]),
  ],
  providers: [VotesService, VoteRepository],
  controllers: [VotesController]
})
export class VotesModule {}
