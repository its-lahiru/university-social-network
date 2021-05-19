import { Body, Controller, Get, Param, UsePipes, ValidationPipe } from '@nestjs/common';

import { StoryService } from './stories.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class StoryController {
  constructor(private readonly storyService: StoryService) { }

  @MessagePattern({ cmd: 'createStory' })
  @UsePipes(ValidationPipe)
  async createStory(@Body('data') data: any) {
    try {
      return await this.storyService.saveStory(data);
    } catch (error) {
      console.log(`Story creation is failed...`);
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'getAllStories' })
  async getAllStories() {
    try {
      return await this.storyService.getAllStories();
    } catch (error) {
      console.log(`Stories retrieval is failed...`);
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'deleteStoryById' })
  async deleteStory(@Body('id') id: string) {
    try {
      return await this.storyService.deletStory(id);
    } catch (error) {
      console.log(`Deletion of Story with id=${id} is failed...`);
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'deleteStoriesByAuthorId' })
  async deleteStoriesByAuthorId(@Body('authorId') authorId: string) {
    try {
      return await this.storyService.deleteStoriesByAuthorId(authorId);
    } catch (error) {
      console.log(`Deletion of Stories related to authorId=${authorId} is failed...`);
      console.log(error);
    }
  }

  // get story by story id
  @MessagePattern({ cmd: 'getStoryById' })
  async getStoryById(@Body('id') id: string) {
    try {
      return await this.storyService.getStoryById(id);
    } catch (error) {
      console.log(`Retrieval of story with id=${id} is failed...`);
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'updateStory' })
  @UsePipes(ValidationPipe)
  async updateStory(@Body('body') body: any) {
    try {
      return this.storyService.updateStory(body);
    } catch (error) {
      console.log(`Updating of story with id=${body['id']} is failed...`);
      console.log(error);
    }
  }

  // get stories by author id
  @MessagePattern({ cmd: 'getStoriesByAuthorId' })
  async getStoriesByAuthorId(@Body('authorId') authorId: string) {
    try {
      return await this.storyService.getStoriesByAuthorId(authorId);
    } catch (error) {
      console.log(`Retrieval of Story with authorId=${authorId} is failed...`);
      console.log(error);
    }
  }
}
