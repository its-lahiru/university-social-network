import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StudentsService } from '../students/students.service';
import { VotesService } from './votes.service';

@Controller()
export class VotesController {
  constructor(private readonly voteService: VotesService) { }

  @Post('api/votes/saveUpVote/:userId')
  async saveUpVote(
    @Param('userId') userId: string,
    @Body('storyId') storyId: string,
  ) {
    return await this.voteService.saveUpVote({ userId, storyId });
  }

  @Post('api/votes/saveDownVote/:userId')
  async saveDownVote(
    @Param('userId') userId: string,
    @Body('storyId') storyId: string,
  ) {
    return await this.voteService.saveDownVote({ userId, storyId });
  }

  @Post('api/votes/resetVote/:userId')
  async resetVote(
    @Param('userId') userId: string,
    @Body('storyId') storyId: string,
  ) {
    return await this.voteService.resetVote({ userId, storyId });
  }

  // @UseGuards(JwtAuthGuard)
  @Get('api/votes/getVotes/:userId')
  async getAllVoteDetailsByUserId(@Param('userId') userId: string) {
    // const result = await this.voteService.getAllVotes(userId);
    // console.log(result);
    // return result;
    return await this.voteService.getAllVotes(userId);
  }
}
