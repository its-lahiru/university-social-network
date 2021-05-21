import { StoriesService } from './stories.service';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
export declare class StoriesController {
    private readonly jwtService;
    private readonly storyService;
    constructor(jwtService: JwtService, storyService: StoriesService);
    createStory(request: Request, content: string): Promise<import("rxjs").Observable<any>>;
    getAllStories(): Promise<import("rxjs").Observable<any>>;
    getStoryById(id: string): Promise<import("rxjs").Observable<any>>;
    getStoriesByAuthorId(authorId: string): Promise<import("rxjs").Observable<any>>;
    deleteStoryById(storyId: string): Promise<import("rxjs").Observable<any>>;
    deleteStoriesByAuthorId(authorId: string): Promise<import("rxjs").Observable<any>>;
    updateStory(id: string, content: string, upVotes: number, downVotes: number): Promise<import("rxjs").Observable<any>>;
}
