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
exports.VotesService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let VotesService = class VotesService {
    constructor(voteClient) {
        this.voteClient = voteClient;
    }
    async saveUpVote(data) {
        const pattern = { cmd: 'saveUpVote' };
        const payload = data;
        return this.voteClient.send(pattern, payload).toPromise();
    }
    async saveDownVote(data) {
        const pattern = { cmd: 'saveDownVote' };
        const payload = data;
        return this.voteClient.send(pattern, payload).toPromise();
    }
    async resetVote(data) {
        const pattern = { cmd: 'resetVote' };
        const payload = data;
        return this.voteClient.send(pattern, payload).toPromise();
    }
    async getAllVotes(data) {
        const pattern = { cmd: 'getAllVotes' };
        const payload = data;
        return this.voteClient.send(pattern, payload).toPromise();
    }
};
VotesService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('STUDENT_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], VotesService);
exports.VotesService = VotesService;
//# sourceMappingURL=votes.service.js.map