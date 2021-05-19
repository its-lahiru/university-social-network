import { VoteRepository } from './repository/Vote.repository';
import { Vote } from './schema/Vote.schema';
export declare class VotesService {
    private voteRepository;
    constructor(voteRepository: VoteRepository);
    saveUpVote(data: any): Promise<Vote>;
    saveDownVote(data: any): Promise<Vote>;
    resetVote(data: any): Promise<void>;
    getAllVotesByUserId(userId: string): Promise<Vote[]>;
}
