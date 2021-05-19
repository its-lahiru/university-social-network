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
exports.StoryRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const uuid_1 = require("uuid");
const Story_schema_1 = require("../schema/Story.schema");
const CurrentDateTime_shared_1 = require("../shared/CurrentDateTime.shared");
let StoryRepository = class StoryRepository {
    constructor(storyModel) {
        this.storyModel = storyModel;
    }
    async create(data) {
        const newStory = new this.storyModel({
            id: uuid_1.v1(),
            authorId: data['authorId'],
            username: data['username'],
            content: data['content'],
            date: CurrentDateTime_shared_1.CURRENT_DATE_TIME(),
            upVotes: 0,
            downVotes: 0,
        });
        if (newStory) {
            return await newStory.save();
        }
        throw new common_1.BadRequestException('Story creation is failed..');
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
        throw new common_1.NotFoundException('Stories retrieval is failed..');
    }
    async delete(id) {
        const result = await this.storyModel.deleteOne({ id: id }).exec();
        if (result.n === 0) {
            throw new common_1.NotFoundException(`Story with id=${id} Deletion failed..`);
        }
    }
    async deleteByAuthorId(authorId) {
        const result = await this.storyModel
            .deleteMany({ authorId: authorId })
            .exec();
        if (result.n === 0) {
            throw new common_1.NotFoundException(`authorId=${authorId} is not found. Story deletion is failed..`);
        }
    }
    async update(body) {
        const story = await this.storyModel.findOne({ id: body['id'] }).exec();
        if (story) {
            if (body['content']) {
                story.content = body['content'];
                story.date = CurrentDateTime_shared_1.CURRENT_DATE_TIME();
            }
            if (body['upVotes']) {
                story.upVotes = body['upVotes'];
            }
            if (body['downVotes']) {
                story.downVotes = body['downVotes'];
            }
            return await story.save();
        }
        throw new common_1.BadRequestException(`Story with id=${body['id']} not found!! update failed..`);
    }
    async findById(id) {
        const story = await this.storyModel.findOne({ id: id }).exec();
        if (story) {
            return story;
        }
        throw new common_1.NotFoundException('Story is not found!!!');
    }
    async findByAuthorId(authorId) {
        const stories = await this.storyModel.find({ authorId: authorId }).exec();
        if (stories) {
            return stories;
        }
        throw new common_1.NotFoundException('Stories are not found!!!');
    }
};
StoryRepository = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(Story_schema_1.Story.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], StoryRepository);
exports.StoryRepository = StoryRepository;
//# sourceMappingURL=Story.repository.js.map