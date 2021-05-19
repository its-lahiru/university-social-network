import { StoriesService } from './stories.service';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
export declare class StoriesController {
    private readonly jwtService;
    private readonly storyService;
    constructor(jwtService: JwtService, storyService: StoriesService);
    createStory(request: Request, content: string): Promise<any>;
    getAllStories(): Promise<any>;
    getStoryById(id: string): Promise<any>;
    getStoriesByAuthorId(authorId: string): Promise<any>;
    deleteStoriesByAuthorId(authorId: string): Promise<any>;
    deleteStoryById(storyId: string): Promise<any>;
    updateStory(id: string, content: string, upVotes: number, downVotes: number): Promise<any>;
}
