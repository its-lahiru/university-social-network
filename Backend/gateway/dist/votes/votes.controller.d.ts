import { VotesService } from './votes.service';
export declare class VotesController {
    private readonly voteService;
    constructor(voteService: VotesService);
    saveUpVote(userId: string, storyId: string): Promise<any>;
    saveDownVote(userId: string, storyId: string): Promise<any>;
    resetVote(userId: string, storyId: string): Promise<any>;
    getAllVoteDetailsByUserId(userId: string): Promise<any>;
}
