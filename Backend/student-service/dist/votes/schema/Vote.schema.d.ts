import { Document } from 'mongoose';
export declare type VoteDocument = Vote & Document;
export declare class Vote {
    userId: string;
    upVotedStoryId: string;
    downVotedStoryId: string;
}
export declare const VoteSchema: import("mongoose").Schema<Document<Vote, {}>, import("mongoose").Model<any, any>, undefined>;
