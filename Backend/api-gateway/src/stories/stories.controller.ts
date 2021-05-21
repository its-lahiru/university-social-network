import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { StoriesService } from './stories.service';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthGuard } from '../auth-guard/jwt-auth.guard';

@Controller()
export class StoriesController {
  constructor(
    private readonly jwtService: JwtService,
    private readonly storyService: StoriesService,
  ) { }

  // create story
  // @UseGuards(JwtAuthGuard)
  @Post('api/stories/create')
  async createStory(@Req() request: Request, @Body('content') content: string) {
    const cookie = request.cookies['jwt'];
    const data = this.jwtService.verify(cookie);
    const authorId = data['id'];
    const username = data['username'];
    return await this.storyService.createStory({ authorId, username, content });
  }

  // get all stories
  // @UseGuards(JwtAuthGuard)
  @Get('api/stories/getAll')
  async getAllStories() {
    return await this.storyService.getAllStories();
  }

  // get story by story id
  @Get('api/stories/:id')
  async getStoryById(@Param('id') id: string) {
    return await this.storyService.getStoryById(id);
  }

  // get story by author id
  @Get('api/stories/getAll/:authorId')
  async getStoriesByAuthorId(@Param('authorId') authorId: string) {
    return await this.storyService.getStoriesByAuthorId(authorId);
  }

  // delete story by story id
  @Delete('api/stories/delete/:storyId')
  async deleteStoryById(@Param('storyId') storyId: string) {
    return await this.storyService.deleteStoryById(storyId);
  }

  // delete stories by author id
  @Delete('api/stories/deleteByAuthorId/:authorId')
  async deleteStoriesByAuthorId(@Param('authorId') authorId: string) {
    return await this.storyService.deleteStoriesByAuthorId(authorId);
  }

  // update story
  @Patch('api/stories/update/:id')
  async updateStory(
    @Param('id') id: string,
    @Body('content') content: string,
    @Body('upVotes') upVotes: number,
    @Body('downVotes') downVotes: number,
  ) {
    return await this.storyService.updateStory({ id, content, upVotes, downVotes });
  }

}
