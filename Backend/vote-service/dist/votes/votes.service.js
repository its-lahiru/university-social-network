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
exports.VotesService = void 0;
const common_1 = require("@nestjs/common");
const Vote_repository_1 = require("./repository/Vote.repository");
let VotesService = class VotesService {
    constructor(voteRepository) {
        this.voteRepository = voteRepository;
    }
    async saveUpVote(data) {
        return await this.voteRepository.saveUpVote(data);
    }
    async saveDownVote(data) {
        return await this.voteRepository.saveDownVote(data);
    }
    async resetVote(data) {
        return await this.voteRepository.resetVote(data);
    }
    async getAllVotesByUserId(userId) {
        return await this.voteRepository.getAllVotesByUserId(userId);
    }
};
VotesService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [Vote_repository_1.VoteRepository])
], VotesService);
exports.VotesService = VotesService;
//# sourceMappingURL=votes.service.js.map