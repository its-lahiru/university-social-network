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
exports.StoryService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let StoryService = class StoryService {
    constructor(storyModel) {
        this.storyModel = storyModel;
        this.client = microservices_1.ClientProxyFactory.create({
            transport: microservices_1.Transport.REDIS,
            options: {
                url: 'redis://localhost:6379',
            },
        });
    }
    async saveStory(content, date, upvotes, downvotes) {
        const newStory = new this.storyModel({ content: content, date: date, upvotes: upvotes, downvotes: downvotes });
        const result = await newStory.save();
        return newStory;
    }
    async getAllStories() {
        const stories = await this.storyModel.find().exec();
        return stories.map((story) => ({
            id: story.id,
            content: story.content,
            date: story.date,
            upvotes: story.upvotes,
            downvotes: story.downvotes
        }));
    }
    async getOneStory(id) {
        const student = await this.findStudent(id);
        return {
            id: student.id,
            content: student.content,
            upvotes: student.upvotes,
            downvotes: student.downvotes
        };
    }
    async deletStory(id) {
        const result = await this.storyModel.deleteOne({ _id: id });
        if (result.n === 0) {
            throw new common_1.NotFoundException("Story not found!");
        }
    }
    async updateStory(id, content, date, upvotes, downvotes) {
        const updatedStory = await this.findStudent(id);
        if (content) {
            updatedStory.content = content;
        }
        if (date) {
            updatedStory.date = date;
        }
        if (upvotes) {
            updatedStory.upvotes = upvotes;
        }
        if (downvotes) {
            updatedStory.downvotes = downvotes;
        }
        updatedStory.save();
        return updatedStory;
    }
    async findStudent(id) {
        let story;
        try {
            story = await this.storyModel.findById(id).exec();
        }
        catch (error) {
            throw new common_1.NotFoundException("Story not found!");
        }
        if (!story) {
            throw new common_1.NotFoundException("Story not found!");
        }
        return story;
    }
};
StoryService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Story')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], StoryService);
exports.StoryService = StoryService;
//# sourceMappingURL=story.service.js.map