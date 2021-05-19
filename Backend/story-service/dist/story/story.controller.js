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
const story_service_1 = require("./story.service");
let StoryController = class StoryController {
    constructor(storyService) {
        this.storyService = storyService;
    }
    async createStory(content, date, upvote, downvote) {
        return await this.storyService.saveStory(content, date, upvote, downvote);
    }
    async getOneStory(id) {
        return await this.storyService.getOneStory(id);
    }
    async getAllStories() {
        return await this.storyService.getAllStories();
    }
    async deleteStory(id) {
        return await this.storyService.deletStory(id);
    }
    async updateStory(id, content, date, upvotes, downvotes) {
        return this.storyService.updateStory(id, content, date, upvotes, downvotes);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('content')),
    __param(1, common_1.Body('date')),
    __param(2, common_1.Body('upvote')),
    __param(3, common_1.Body('downvote')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, Number]),
    __metadata("design:returntype", Promise)
], StoryController.prototype, "createStory", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoryController.prototype, "getOneStory", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StoryController.prototype, "getAllStories", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoryController.prototype, "deleteStory", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Body('id')),
    __param(1, common_1.Body('content')),
    __param(2, common_1.Body('date')),
    __param(3, common_1.Body('upvotes')),
    __param(4, common_1.Body('downvotes')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number, Number]),
    __metadata("design:returntype", Promise)
], StoryController.prototype, "updateStory", null);
StoryController = __decorate([
    common_1.Controller('story'),
    __metadata("design:paramtypes", [story_service_1.StoryService])
], StoryController);
exports.StoryController = StoryController;
//# sourceMappingURL=story.controller.js.map