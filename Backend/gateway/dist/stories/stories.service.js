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
exports.StoriesService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let StoriesService = class StoriesService {
    constructor(storyClient) {
        this.storyClient = storyClient;
    }
    async createStory(data) {
        const pattern = { cmd: 'createStory' };
        const payload = data;
        return this.storyClient.send(pattern, payload);
    }
    async getAllStories() {
        const pattern = { cmd: 'getAllStories' };
        const payload = 'getAll';
        return this.storyClient.send(pattern, payload);
    }
    async getStoriesByAuthorId(data) {
        const pattern = { cmd: 'getStoriesByAuthorId' };
        const payload = data;
        return this.storyClient.send(pattern, payload);
    }
    async getStoryById(data) {
        const pattern = { cmd: 'getStoryById' };
        const payload = data;
        return this.storyClient.send(pattern, payload);
    }
    async deleteStoryById(data) {
        const pattern = { cmd: 'deleteStoryById' };
        const payload = data;
        return this.storyClient.send(pattern, payload);
    }
    async deleteStoriesByAuthorId(data) {
        const pattern = { cmd: 'deleteStoriesByAuthorId' };
        const payload = data;
        return this.storyClient.send(pattern, payload);
    }
    async updateStory(data) {
        const pattern = { cmd: 'updateStory' };
        const payload = data;
        return this.storyClient.send(pattern, payload);
    }
};
StoriesService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('STORIES_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], StoriesService);
exports.StoriesService = StoriesService;
//# sourceMappingURL=stories.service.js.map