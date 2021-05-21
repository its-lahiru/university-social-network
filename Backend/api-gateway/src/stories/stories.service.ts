import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class StoriesService {

  constructor(@Inject('STORIES_SERVICE') private readonly storyClient: ClientProxy,) { }

  async createStory(data: any) {
    const pattern = { cmd: 'createStory' };
    const payload = data;
    return this.storyClient.send<any>(pattern, payload);
  }

  async getAllStories() {
    const pattern = { cmd: 'getAllStories' };
    const payload = 'getAll';
    return this.storyClient.send<any>(pattern, payload);
  }

  async getStoriesByAuthorId(data: any) {
    const pattern = { cmd: 'getStoriesByAuthorId' };
    const payload = data;
    return this.storyClient.send<any>(pattern, payload);
  }

  async getStoryById(data: any) {
    const pattern = { cmd: 'getStoryById' };
    const payload = data;
    return this.storyClient.send<any>(pattern, payload);
  }

  async deleteStoryById(data: any) {
    const pattern = { cmd: 'deleteStoryById' };
    const payload = data;
    return this.storyClient.send<any>(pattern, payload);
  }

  async deleteStoriesByAuthorId(data: any) {
    const pattern = { cmd: 'deleteStoriesByAuthorId' };
    const payload = data;
    return this.storyClient.send<any>(pattern, payload);
  }

  async updateStory(data: any) {
    const pattern = { cmd: 'updateStory' };
    const payload = data;
    return this.storyClient.send<any>(pattern, payload);
  }
}
