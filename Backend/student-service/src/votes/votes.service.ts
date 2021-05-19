import { Injectable } from '@nestjs/common';
import { VoteRepository } from './repository/Vote.repository';
import { Vote } from './schema/Vote.schema';

@Injectable()
export class VotesService {
  constructor(private voteRepository: VoteRepository) {}

  async saveUpVote(data: any) {
    return await this.voteRepository.saveUpVote(data);
  }

  async saveDownVote(data: any) {
    return await this.voteRepository.saveDownVote(data);
  }

  async resetVote(data: any) {
    return await this.voteRepository.resetVote(data);
  }

  async getAllVotesByUserId(userId: string) {
    return await this.voteRepository.getAllVotesByUserId(userId);
  }
}
