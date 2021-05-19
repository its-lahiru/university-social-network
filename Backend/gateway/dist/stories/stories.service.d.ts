import { ClientProxy } from '@nestjs/microservices';
export declare class StoriesService {
    private readonly storyClient;
    constructor(storyClient: ClientProxy);
    createStory(data: any): Promise<import("rxjs").Observable<any>>;
    getAllStories(): Promise<import("rxjs").Observable<any>>;
    getStoriesByAuthorId(data: any): Promise<import("rxjs").Observable<any>>;
    getStoryById(data: any): Promise<import("rxjs").Observable<any>>;
    deleteStoryById(data: any): Promise<import("rxjs").Observable<any>>;
    deleteStoriesByAuthorId(data: any): Promise<import("rxjs").Observable<any>>;
    updateStory(data: any): Promise<import("rxjs").Observable<any>>;
}
