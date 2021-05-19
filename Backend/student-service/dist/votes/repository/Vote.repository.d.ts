import { Vote, VoteDocument } from '../schema/Vote.schema';
import { Model } from 'mongoose';
export declare class VoteRepository {
    private voteModel;
    constructor(voteModel: Model<VoteDocument>);
    getAllVotesByUserId(userId: string): Promise<Vote[]>;
    saveUpVote(data: any): Promise<Vote>;
    saveDownVote(data: any): Promise<Vote>;
    resetVote(data: any): Promise<void>;
}
