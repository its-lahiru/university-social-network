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
exports.StoriesController = void 0;
const common_1 = require("@nestjs/common");
const stories_service_1 = require("./stories.service");
const jwt_1 = require("@nestjs/jwt");
let StoriesController = class StoriesController {
    constructor(jwtService, storyService) {
        this.jwtService = jwtService;
        this.storyService = storyService;
    }
    async createStory(request, content) {
        const cookie = request.cookies['jwt'];
        const data = this.jwtService.verify(cookie);
        const authorId = data['id'];
        const username = data['username'];
        return await this.storyService.createStory({ authorId, username, content });
    }
    async getAllStories() {
        return await this.storyService.getAllStories();
    }
    async getStoryById(id) {
        return await this.storyService.getStoryById(id);
    }
    async getStoriesByAuthorId(authorId) {
        return await this.storyService.getStoriesByAuthorId(authorId);
    }
    async deleteStoryById(storyId) {
        return await this.storyService.deleteStoryById(storyId);
    }
    async deleteStoriesByAuthorId(authorId) {
        return await this.storyService.deleteStoriesByAuthorId(authorId);
    }
    async updateStory(id, content, upVotes, downVotes) {
        return await this.storyService.updateStory({ id, content, upVotes, downVotes });
    }
};
__decorate([
    common_1.Post('api/stories/create'),
    __param(0, common_1.Req()), __param(1, common_1.Body('content')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], StoriesController.prototype, "createStory", null);
__decorate([
    common_1.Get('api/stories/getAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StoriesController.prototype, "getAllStories", null);
__decorate([
    common_1.Get('api/stories/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoriesController.prototype, "getStoryById", null);
__decorate([
    common_1.Get('api/stories/getAll/:authorId'),
    __param(0, common_1.Param('authorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoriesController.prototype, "getStoriesByAuthorId", null);
__decorate([
    common_1.Delete('api/stories/delete/:storyId'),
    __param(0, common_1.Param('storyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoriesController.prototype, "deleteStoryById", null);
__decorate([
    common_1.Delete('api/stories/deleteByAuthorId/:authorId'),
    __param(0, common_1.Param('authorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoriesController.prototype, "deleteStoriesByAuthorId", null);
__decorate([
    common_1.Patch('api/stories/update/:id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body('content')),
    __param(2, common_1.Body('upVotes')),
    __param(3, common_1.Body('downVotes')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, Number]),
    __metadata("design:returntype", Promise)
], StoriesController.prototype, "updateStory", null);
StoriesController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        stories_service_1.StoriesService])
], StoriesController);
exports.StoriesController = StoriesController;
//# sourceMappingURL=stories.controller.js.map