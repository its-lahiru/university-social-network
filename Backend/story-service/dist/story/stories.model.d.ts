import { Document } from 'mongoose';
export declare type StoryDocument = Story & Document;
export declare class Story {
    id: string;
    authorId: string;
    content: string;
    date: string;
    upVotes: number;
    downVotes: number;
}
export declare const StorySchema: import("mongoose").Schema<Document<Story, {}>, import("mongoose").Model<any, any>, undefined>;
