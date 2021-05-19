import { Model } from 'mongoose';
import { Story } from './story.model';
export declare class StoryService {
    private readonly storyModel;
    private client;
    constructor(storyModel: Model<Story>);
    saveStory(content: string, date: string, upvotes: number, downvotes: number): Promise<Story>;
    getAllStories(): Promise<{
        id: string;
        content: string;
        date: string;
        upvotes: number;
        downvotes: number;
    }[]>;
    getOneStory(id: string): Promise<{
        id: string;
        content: string;
        upvotes: number;
        downvotes: number;
    }>;
    deletStory(id: string): Promise<void>;
    updateStory(id: string, content: string, date: string, upvotes: number, downvotes: number): Promise<Story>;
    findStudent(id: string): Promise<Story>;
}
