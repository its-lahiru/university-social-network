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
exports.StoryController = void 0;
const common_1 = require("@nestjs/common");
const stories_service_1 = require("./stories.service");
const microservices_1 = require("@nestjs/microservices");
let StoryController = class StoryController {
    constructor(storyService) {
        this.storyService = storyService;
    }
    async createStory(data) {
        try {
            return await this.storyService.saveStory(data);
        }
        catch (error) {
            console.log(`Story creation is failed...`);
            console.log(error);
        }
    }
    async getAllStories() {
        try {
            return await this.storyService.getAllStories();
        }
        catch (error) {
            console.log(`Stories retrieval is failed...`);
            console.log(error);
        }
    }
    async deleteStory(id) {
        try {
            return await this.storyService.deletStory(id);
        }
        catch (error) {
            console.log(`Deletion of Story with id=${id} is failed...`);
            console.log(error);
        }
    }
    async deleteStoriesByAuthorId(authorId) {
        try {
            return await this.storyService.deleteStoriesByAuthorId(authorId);
        }
        catch (error) {
            console.log(`Deletion of Stories related to authorId=${authorId} is failed...`);
            console.log(error);
        }
    }
    async getStoryById(id) {
        try {
            return await this.storyService.getStoryById(id);
        }
        catch (error) {
            console.log(`Retrieval of story with id=${id} is failed...`);
            console.log(error);
        }
    }
    async updateStory(body) {
        try {
            return this.storyService.updateStory(body);
        }
        catch (error) {
            console.log(`Updating of story with id=${body['id']} is failed...`);
            console.log(error);
        }
    }
    async getStoriesByAuthorId(authorId) {
        try {
            return await this.storyService.getStoriesByAuthorId(authorId);
        }
        catch (error) {
            console.log(`Retrieval of Story with authorId=${authorId} is failed...`);
            console.log(error);
        }
    }
};
__decorate([
    microservices_1.MessagePattern({ cmd: 'createStory' }),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StoryController.prototype, "createStory", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'getAllStories' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StoryController.prototype, "getAllStories", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'deleteStoryById' }),
    __param(0, common_1.Body('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoryController.prototype, "deleteStory", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'deleteStoriesByAuthorId' }),
    __param(0, common_1.Body('authorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoryController.prototype, "deleteStoriesByAuthorId", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'getStoryById' }),
    __param(0, common_1.Body('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoryController.prototype, "getStoryById", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'updateStory' }),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body('body')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StoryController.prototype, "updateStory", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'getStoriesByAuthorId' }),
    __param(0, common_1.Body('authorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoryController.prototype, "getStoriesByAuthorId", null);
StoryController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [stories_service_1.StoryService])
], StoryController);
exports.StoryController = StoryController;
//# sourceMappingURL=stories.controller.js.map