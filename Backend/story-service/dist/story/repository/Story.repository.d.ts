import { Model } from 'mongoose';
import { StoryDocument } from '../schema/Story.schema';
export declare class StoryRepository {
    private storyModel;
    constructor(storyModel: Model<StoryDocument>);
    create(data: any): Promise<StoryDocument>;
    findAll(): Promise<{
        id: any;
        authorId: string;
        username: string;
        content: string;
        date: string;
        upVotes: number;
        downVotes: number;
    }[]>;
    delete(id: string): Promise<void>;
    deleteByAuthorId(authorId: string): Promise<void>;
    update(body: any): Promise<StoryDocument>;
    findById(id: string): Promise<StoryDocument>;
    findByAuthorId(authorId: string): Promise<StoryDocument[]>;
}
