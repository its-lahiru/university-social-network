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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryService = void 0;
const common_1 = require("@nestjs/common");
const Story_repository_1 = require("./repository/Story.repository");
let StoryService = class StoryService {
    constructor(storyRepository) {
        this.storyRepository = storyRepository;
    }
    async saveStory(data) {
        return await this.storyRepository.create(data);
    }
    async getAllStories() {
        return await this.storyRepository.findAll();
    }
    async deletStory(id) {
        return await this.storyRepository.delete(id);
    }
    async deleteStoriesByAuthorId(authorId) {
        return await this.storyRepository.deleteByAuthorId(authorId);
    }
    async updateStory(body) {
        return await this.storyRepository.update(body);
    }
    async getStoryById(id) {
        return await this.storyRepository.findById(id);
    }
    async getStoriesByAuthorId(authorId) {
        return await this.storyRepository.findByAuthorId(authorId);
    }
};
StoryService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [Story_repository_1.StoryRepository])
], StoryService);
exports.StoryService = StoryService;
//# sourceMappingURL=stories.service.js.map