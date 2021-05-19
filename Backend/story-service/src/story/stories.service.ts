import { Injectable } from '@nestjs/common';
import { StoryRepository } from './repository/Story.repository';

@Injectable()
export class StoryService {
  constructor(private storyRepository: StoryRepository) { }

  async saveStory(data: any) {
    return await this.storyRepository.create(data);
  }

  async getAllStories() {
    return await this.storyRepository.findAll();
  }

  async deletStory(id: string) {
    return await this.storyRepository.delete(id);
  }

  async deleteStoriesByAuthorId(authorId: string) {
    return await this.storyRepository.deleteByAuthorId(authorId);
  }

  async updateStory(body: any) {
    return await this.storyRepository.update(body);
  }

  async getStoryById(id: string) {
    return await this.storyRepository.findById(id);
  }

  async getStoriesByAuthorId(authorId: string) {
    return await this.storyRepository.findByAuthorId(authorId);
  }

 

  

  




  // async getStory(id: string) {
  //   const story = await this.findStoryById(id);
  //   return {
  //     id: story.id,
  //     content: story.content,
  //     upvotes: story.upvotes,
  //     downvotes: story.downvotes,
  //   };
  // }





  // async findStoryById(id: string) {
  //   let story;
  //   try {
  //     story = await this.storyModel.findById(id).exec();
  //   } catch (error) {
  //     throw new NotFoundException('Story not found!');
  //   }
  //   if (!story) {
  //     throw new NotFoundException('Story not found!');
  //   }
  //   return story;
  // }
}
