import { StoryRepository } from './repository/Story.repository';
export declare class StoryService {
    private storyRepository;
    constructor(storyRepository: StoryRepository);
    saveStory(data: any): Promise<import("./schema/Story.schema").StoryDocument>;
    getAllStories(): Promise<{
        id: any;
        authorId: string;
        username: string;
        content: string;
        date: string;
        upVotes: number;
        downVotes: number;
    }[]>;
    deletStory(id: string): Promise<void>;
    deleteStoriesByAuthorId(authorId: string): Promise<void>;
    updateStory(body: any): Promise<import("./schema/Story.schema").StoryDocument>;
    getStoryById(id: string): Promise<import("./schema/Story.schema").StoryDocument>;
    getStoriesByAuthorId(authorId: string): Promise<import("./schema/Story.schema").StoryDocument[]>;
}
