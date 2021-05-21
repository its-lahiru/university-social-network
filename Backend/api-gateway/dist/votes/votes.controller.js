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
const votes_service_1 = require("./votes.service");
let VotesController = class VotesController {
    constructor(voteService) {
        this.voteService = voteService;
    }
    async saveUpVote(userId, storyId) {
        return await this.voteService.saveUpVote({ userId, storyId });
    }
    async saveDownVote(userId, storyId) {
        return await this.voteService.saveDownVote({ userId, storyId });
    }
    async resetVote(userId, storyId) {
        return await this.voteService.resetVote({ userId, storyId });
    }
    async getAllVoteDetailsByUserId(userId) {
        return await this.voteService.getAllVotes(userId);
    }
};
__decorate([
    common_1.Post('api/votes/saveUpVote/:userId'),
    __param(0, common_1.Param('userId')),
    __param(1, common_1.Body('storyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], VotesController.prototype, "saveUpVote", null);
__decorate([
    common_1.Post('api/votes/saveDownVote/:userId'),
    __param(0, common_1.Param('userId')),
    __param(1, common_1.Body('storyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], VotesController.prototype, "saveDownVote", null);
__decorate([
    common_1.Post('api/votes/resetVote/:userId'),
    __param(0, common_1.Param('userId')),
    __param(1, common_1.Body('storyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], VotesController.prototype, "resetVote", null);
__decorate([
    common_1.Get('api/votes/getVotes/:userId'),
    __param(0, common_1.Param('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VotesController.prototype, "getAllVoteDetailsByUserId", null);
VotesController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [votes_service_1.VotesService])
], VotesController);
exports.VotesController = VotesController;
//# sourceMappingURL=votes.controller.js.map