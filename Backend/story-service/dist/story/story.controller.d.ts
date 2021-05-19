import { StoryService } from './story.service';
export declare class StoryController {
    private readonly storyService;
    constructor(storyService: StoryService);
    createStory(content: string, date: string, upvote: number, downvote: number): Promise<import("./story.model").Story>;
    getOneStory(id: string): Promise<{
        id: string;
        content: string;
        upvotes: number;
        downvotes: number;
    }>;
    getAllStories(): Promise<{
        id: string;
        content: string;
        date: string;
        upvotes: number;
        downvotes: number;
    }[]>;
    deleteStory(id: string): Promise<void>;
    updateStory(id: string, content: string, date: string, upvotes: number, downvotes: number): Promise<import("./story.model").Story>;
}
