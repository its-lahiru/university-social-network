import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Vote, VoteDocument } from '../schema/Vote.schema';
import { Model } from 'mongoose';

@Injectable()
export class VoteRepository {
  constructor(@InjectModel(Vote.name) private voteModel: Model<VoteDocument>) {
  }

  async getAllVotesByUserId(userId: string): Promise<Vote[]> {
    const voteDetails = await this.voteModel.find({ userId: userId }).exec();
    if (voteDetails) {
      return voteDetails;
    }
    throw new NotFoundException(
      `Vote details of userId=${userId} retrieval is failed..`,
    );
  }

  // save upvote details
  async saveUpVote(data: any): Promise<Vote> {
    const upVotedEntry = await this.voteModel.findOne({
      userId: data['userId'],
      upVotedStoryId: data['storyId'],
    });
    const downVotedEntry = await this.voteModel.findOne({
      userId: data['userId'],
      downVotedStoryId: data['storyId'],
    });

    if (upVotedEntry) {
      // if up vote already exists do nothing
      return null;
    } else if (downVotedEntry) {
      // if down vote exists change it to null and save up vote
      // const updateUpVote = new this.voteModel({
      //   userId: data['userId'],
      //   upVotedStoryId: data['storyId'],
      //   downVotedStoryId: '',
      // });
      downVotedEntry.downVotedStoryId = '';
      downVotedEntry.upVotedStoryId = data['storyId'];
      return await downVotedEntry.save();
    } else {
      // save upvote and change down vote to null
      const saveUpVote = new this.voteModel({
        userId: data['userId'],
        upVotedStoryId: data['storyId'],
        downVotedStoryId: '',
      });
      return await saveUpVote.save();
    }
  }

  // save downVote details
  async saveDownVote(data: any): Promise<Vote> {
    const downVotedEntry = await this.voteModel.findOne({
      userId: data['userId'],
      downVotedStoryId: data['storyId'],
    });
    const upVotedEntry = await this.voteModel.findOne({
      userId: data['userId'],
      upVotedStoryId: data['storyId'],
    });

    if (downVotedEntry) {
      // if downVote already exists do nothing
      return null;
    } else if (upVotedEntry) {
      // if upvote exists change it to null and save down vote
      // const updateDownVote = new this.voteModel({
      //   userId: data['userId'],
      //   upVotedStoryId: '',
      //   downVotedStoryId: data['storyId'],
      // });
      upVotedEntry.upVotedStoryId = '';
      upVotedEntry.downVotedStoryId = data['storyId'];
      return await upVotedEntry.save();
    } else {
      // save downVote and change upvote to null
      const saveDownVote = new this.voteModel({
        userId: data['userId'],
        upVotedStoryId: '',
        downVotedStoryId: data['storyId'],
      });
      return await saveDownVote.save();
    }
  }

  // reset vote
  // delete entry match with userId and story Id
  async resetVote(data: any): Promise<void> {
    const upVote = await this.voteModel.findOne({
      userId: data['userId'],
      upVotedStoryId: data['storyId'],
    });

    const downVote = await this.voteModel.findOne({
      userId: data['userId'],
      downVotedStoryId: data['storyId'],
    });

    if (upVote) {
      const result = await this.voteModel.deleteOne({
        userId: data['userId'],
        upVotedStoryId: data['storyId'],
      });
      if (result.n === 0) {
        throw new NotFoundException(
          `upvote with userId=${data['userId']} is not found! Deletion failed!!`,
        );
      }
    } else if (downVote) {
      const result = await this.voteModel.deleteOne({
        userId: data['userId'],
        downVotedStoryId: data['storyId'],
      });
      if (result.n === 0) {
        throw new NotFoundException(
          `DownVote with userId=${data['userId']} is not found! Deletion failed!!`,
        );
      }
    } else {
      throw new NotFoundException(
        `Vote with userId:${data['userId']} and storyId:${data['storyId']} is not found..`,
      );
    }
  }
}
