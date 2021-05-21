"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoteRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const Vote_schema_1 = require("../schema/Vote.schema");
const mongoose_2 = require("mongoose");
let VoteRepository = class VoteRepository {
    constructor(voteModel) {
        this.voteModel = voteModel;
    }
    async getAllVotesByUserId(userId) {
        const voteDetails = await this.voteModel.find({ userId: userId }).exec();
        if (voteDetails) {
            return voteDetails;
        }
        throw new common_1.NotFoundException(`Vote details of userId=${userId} retrieval is failed..`);
    }
    async saveUpVote(data) {
        const upVotedEntry = await this.voteModel.findOne({
            userId: data['userId'],
            upVotedStoryId: data['storyId'],
        });
        const downVotedEntry = await this.voteModel.findOne({
            userId: data['userId'],
            downVotedStoryId: data['storyId'],
        });
        if (upVotedEntry) {
            return null;
        }
        else if (downVotedEntry) {
            downVotedEntry.userId = data['userId'];
            downVotedEntry.downVotedStoryId = '';
            downVotedEntry.upVotedStoryId = data['storyId'];
            return await downVotedEntry.save();
        }
        else {
            const saveUpVote = new this.voteModel({
                userId: data['userId'],
                upVotedStoryId: data['storyId'],
                downVotedStoryId: '',
            });
            return await saveUpVote.save();
        }
    }
    async saveDownVote(data) {
        const downVotedEntry = await this.voteModel.findOne({
            userId: data['userId'],
            downVotedStoryId: data['storyId'],
        });
        const upVotedEntry = await this.voteModel.findOne({
            userId: data['userId'],
            upVotedStoryId: data['storyId'],
        });
        if (downVotedEntry) {
            return null;
        }
        else if (upVotedEntry) {
            upVotedEntry.userId = data['userId'];
            upVotedEntry.upVotedStoryId = '';
            upVotedEntry.downVotedStoryId = data['storyId'];
            return await upVotedEntry.save();
        }
        else {
            const saveDownVote = new this.voteModel({
                userId: data['userId'],
                upVotedStoryId: '',
                downVotedStoryId: data['storyId'],
            });
            return await saveDownVote.save();
        }
    }
    async resetVote(data) {
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
                throw new common_1.NotFoundException(`upvote with userId=${data['userId']} is not found! Deletion failed!!`);
            }
        }
        else if (downVote) {
            const result = await this.voteModel.deleteOne({
                userId: data['userId'],
                downVotedStoryId: data['storyId'],
            });
            if (result.n === 0) {
                throw new common_1.NotFoundException(`DownVote with userId=${data['userId']} is not found! Deletion failed!!`);
            }
        }
        else {
            throw new common_1.NotFoundException(`Vote with userId:${data['userId']} and storyId:${data['storyId']} is not found..`);
        }
    }
};
VoteRepository = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(Vote_schema_1.Vote.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], VoteRepository);
exports.VoteRepository = VoteRepository;
//# sourceMappingURL=Vote.repository.js.map