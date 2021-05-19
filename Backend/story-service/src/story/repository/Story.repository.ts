import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { v1 as uuid } from 'uuid';

import { Story, StoryDocument } from '../schema/Story.schema';
import { CURRENT_DATE_TIME } from '../shared/CurrentDateTime.shared';

@Injectable()
export class StoryRepository {
  constructor(@InjectModel(Story.name) private storyModel: Model<StoryDocument>) { }

  async create(data: any) {
    const newStory = new this.storyModel({
      id: uuid(),
      authorId: data['authorId'],
      username: data['username'],
      content: data['content'],
      date: CURRENT_DATE_TIME(),
      upVotes: 0,
      downVotes: 0,
    });
    if (newStory) {
      return await newStory.save();
    }
    throw new BadRequestException('Story creation is failed..');
  }

  async findAll() {
    const stories = await this.storyModel.find().exec();
    if (stories) {
      return stories.map((story) => ({
        id: story.id,
        authorId: story.authorId,
        username: story.username,
        content: story.content,
        date: story.date,
        upVotes: story.upVotes,
        downVotes: story.downVotes,
      }));
    }
    throw new NotFoundException('Stories retrieval is failed..');
  }

  async delete(id: string) {
    const result = await this.storyModel.deleteOne({ id: id }).exec();
    if (result.n === 0) {
      throw new NotFoundException(`Story with id=${id} Deletion failed..`);
    }
  }

  async deleteByAuthorId(authorId: string) {
    const result = await this.storyModel
      .deleteMany({ authorId: authorId })
      .exec();
    if (result.n === 0) {
      throw new NotFoundException(
        `authorId=${authorId} is not found. Story deletion is failed..`,
      );
    }
  }

  async update(body: any) {
    const story = await this.storyModel.findOne({ id: body['id'] }).exec();
    if (story) {
      if (body['content']) {
        story.content = body['content'];
        story.date = CURRENT_DATE_TIME();
      }
      if (body['upVotes']) {
        story.upVotes = body['upVotes'];
      }
      if (body['downVotes']) {
        story.downVotes = body['downVotes'];
      }
      return await story.save();
    }
    throw new BadRequestException(
      `Story with id=${body['id']} not found!! update failed..`,
    );
  }

  // get story by story id
  async findById(id: string) {
    const story = await this.storyModel.findOne({ id: id }).exec();
    if (story) {
      return story;
    }
    throw new NotFoundException('Story is not found!!!');
  }

  // get stories by author id
  async findByAuthorId(authorId: string) {
    const stories = await this.storyModel.find({ authorId: authorId }).exec();
    if (stories) {
      return stories;
    }
    throw new NotFoundException('Stories are not found!!!');
  }
}
