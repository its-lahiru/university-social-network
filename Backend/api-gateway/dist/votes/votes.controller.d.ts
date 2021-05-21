import { VotesService } from './votes.service';
export declare class VotesController {
    private readonly voteService;
    constructor(voteService: VotesService);
    saveUpVote(userId: string, storyId: string): Promise<import("rxjs").Observable<any>>;
    saveDownVote(userId: string, storyId: string): Promise<import("rxjs").Observable<any>>;
    resetVote(userId: string, storyId: string): Promise<import("rxjs").Observable<any>>;
    getAllVoteDetailsByUserId(userId: string): Promise<import("rxjs").Observable<any>>;
}
