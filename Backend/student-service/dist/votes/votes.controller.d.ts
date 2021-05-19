import { VotesService } from './votes.service';
import { Vote } from './schema/Vote.schema';
export declare class VotesController {
    private votesService;
    constructor(votesService: VotesService);
    saveUpVote(data: any): Promise<Vote>;
    saveDownVote(data: any): Promise<Vote>;
    resetVote(data: any): Promise<void>;
    getAllVotesByUserId(userId: string): Promise<Vote[]>;
}
