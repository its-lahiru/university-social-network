import { StoryService } from './stories.service';
export declare class StoryController {
    private readonly storyService;
    constructor(storyService: StoryService);
    createStory(data: any): Promise<import("./schema/Story.schema").StoryDocument>;
    getAllStories(): Promise<{
        id: any;
        authorId: string;
        username: string;
        content: string;
        date: string;
        upVotes: number;
        downVotes: number;
    }[]>;
    deleteStory(id: string): Promise<void>;
    deleteStoriesByAuthorId(authorId: string): Promise<void>;
    getStoryById(id: string): Promise<import("./schema/Story.schema").StoryDocument>;
    updateStory(body: any): Promise<import("./schema/Story.schema").StoryDocument>;
    getStoriesByAuthorId(authorId: string): Promise<import("./schema/Story.schema").StoryDocument[]>;
}
