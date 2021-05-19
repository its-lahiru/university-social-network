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
exports.NoticesService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let NoticesService = class NoticesService {
    constructor(noticeClient) {
        this.noticeClient = noticeClient;
    }
    async createNotice(data) {
        const pattern = { cmd: 'createNotice' };
        const payload = data;
        return this.noticeClient.send(pattern, payload).toPromise();
    }
    async getAllNotices() {
        const pattern = { cmd: 'getAllNotices' };
        const payload = 'getAll';
        return this.noticeClient.send(pattern, payload).toPromise();
    }
    async deleteNoticeById(data) {
        const pattern = { cmd: 'deleteNoticeById' };
        const payload = data;
        return this.noticeClient.send(pattern, payload).toPromise();
    }
    async updateNotice(data) {
        const pattern = { cmd: 'updateNotice' };
        const payload = data;
        return this.noticeClient.send(pattern, payload).toPromise();
    }
    async getNoticeById(data) {
        const pattern = { cmd: 'getNoticeById' };
        const payload = data;
        return this.noticeClient.send(pattern, payload).toPromise();
    }
};
NoticesService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('NOTICES_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], NoticesService);
exports.NoticesService = NoticesService;
//# sourceMappingURL=notices.service.js.map