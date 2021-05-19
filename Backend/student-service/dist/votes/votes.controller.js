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
exports.VotesController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const votes_service_1 = require("./votes.service");
let VotesController = class VotesController {
    constructor(votesService) {
        this.votesService = votesService;
    }
    async saveUpVote(data) {
        try {
            return await this.votesService.saveUpVote(data);
        }
        catch (error) {
            console.log(`Saving upvote with userId:${data['userId']} and storyId:${data['storyId']} is failed... `);
            console.log(error);
        }
    }
    async saveDownVote(data) {
        try {
            return await this.votesService.saveDownVote(data);
        }
        catch (error) {
            console.log(`Saving downVote with userId:${data['userId']} and storyId:${data['storyId']} is failed... `);
            console.log(error);
        }
    }
    async resetVote(data) {
        try {
            return await this.votesService.resetVote(data);
        }
        catch (error) {
            console.log(`Reset vote with userId:${data['userId']} and storyId:${data['storyId']} is failed... `);
            console.log(error);
        }
    }
    async getAllVotesByUserId(userId) {
        try {
            return await this.votesService.getAllVotesByUserId(userId);
        }
        catch (error) {
            console.log(`Votes retrieval is failed..`);
            console.log(error);
        }
    }
};
__decorate([
    microservices_1.MessagePattern({ cmd: 'saveUpVote' }),
    __param(0, common_1.Body('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VotesController.prototype, "saveUpVote", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'saveDownVote' }),
    __param(0, common_1.Body('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VotesController.prototype, "saveDownVote", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'resetVote' }),
    __param(0, common_1.Body('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VotesController.prototype, "resetVote", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'getAllVotes' }),
    __param(0, common_1.Body('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VotesController.prototype, "getAllVotesByUserId", null);
VotesController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [votes_service_1.VotesService])
], VotesController);
exports.VotesController = VotesController;
//# sourceMappingURL=votes.controller.js.map