import { ClientProxy } from '@nestjs/microservices';
export declare class StoriesService {
    private readonly storyClient;
    constructor(storyClient: ClientProxy);
    createStory(data: any): Promise<any>;
    getAllStories(): Promise<any>;
    getStoriesByAuthorId(data: any): Promise<any>;
    getStoryById(data: any): Promise<any>;
    deleteStoryById(data: any): Promise<any>;
    deleteStoriesByAuthorId(data: any): Promise<any>;
    updateStory(data: any): Promise<any>;
}
