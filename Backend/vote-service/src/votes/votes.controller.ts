import { Body, Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { VotesService } from './votes.service';
import { Vote } from './schema/Vote.schema';

@Controller()
export class VotesController {
    constructor(private votesService: VotesService) { }

    // save upVote
    @MessagePattern({ cmd: 'saveUpVote' })
    async saveUpVote(@Body('data') data: any): Promise<Vote> {
        try {
            // console.log(data['userId']);
            // console.log(data['storyId']);
            return await this.votesService.saveUpVote(data);
        } catch (error) {
            console.log(
                `Saving upvote with userId:${data['userId']} and storyId:${data['storyId']} is failed... `,
            );
            console.log(error);
        }
    }

    // save downVote
    @MessagePattern({ cmd: 'saveDownVote' })
    async saveDownVote(@Body('data') data: any): Promise<Vote> {
        try {
            return await this.votesService.saveDownVote(data);
        } catch (error) {
            console.log(
                `Saving downVote with userId:${data['userId']} and storyId:${data['storyId']} is failed... `,
            );
            console.log(error);
        }
    }

    // reset vote
    @MessagePattern({ cmd: 'resetVote' })
    async resetVote(@Body('data') data: any): Promise<void> {
        try {
            // console.log('reset');
            // console.log(data);
            return await this.votesService.resetVote(data);
        } catch (error) {
            console.log(
                `Reset vote with userId:${data['userId']} and storyId:${data['storyId']} is failed... `,
            );
            console.log(error);
        }
    }

    // get all votes details
    @MessagePattern({ cmd: 'getAllVotes' })
    async getAllVotesByUserId(@Body('userId') userId: string): Promise<Vote[]> {
        try {
            return await this.votesService.getAllVotesByUserId(userId);
        } catch (error) {
            console.log(`Votes retrieval is failed..`);
            console.log(error);
        }
    }
}
