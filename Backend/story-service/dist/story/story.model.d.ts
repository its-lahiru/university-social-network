import * as mongoose from 'mongoose';
export declare const StorySchema: mongoose.Schema<mongoose.Document<any, {}>, mongoose.Model<any, any>, undefined>;
export interface Story extends mongoose.Document {
    id: string;
    content: string;
    date: string;
    upvotes: number;
    downvotes: number;
}
