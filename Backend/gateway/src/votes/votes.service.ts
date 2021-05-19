import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class VotesService {
  constructor(
    @Inject('STUDENT_SERVICE') private readonly voteClient: ClientProxy,
  ) {}

  // save upVote
  async saveUpVote(data: any) {
    const pattern = { cmd: 'saveUpVote' };
    const payload = data;
    return this.voteClient.send<any>(pattern, payload);
  }

  // save downVote
  async saveDownVote(data: any) {
    const pattern = { cmd: 'saveDownVote' };
    const payload = data;
    return this.voteClient.send<any>(pattern, payload);
  }

  // reset Vote
  async resetVote(data: any) {
    const pattern = { cmd: 'resetVote' };
    const payload = data;
    return this.voteClient.send<any>(pattern, payload);
  }

  //get All Votes
  async getAllVotes(data: any) {
    const pattern = { cmd: 'getAllVotes' };
    const payload = data;
    return this.voteClient.send<any>(pattern, payload);
  }
}
