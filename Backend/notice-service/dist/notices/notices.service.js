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
exports.NoticesService = void 0;
const common_1 = require("@nestjs/common");
const Notice_repository_1 = require("./repository/Notice.repository");
let NoticesService = class NoticesService {
    constructor(noticeRepository) {
        this.noticeRepository = noticeRepository;
    }
    async createNotice(data) {
        return await this.noticeRepository.create(data);
    }
    async getAllNotices() {
        return await this.noticeRepository.findAll();
    }
    async updateNotice(body) {
        return await this.noticeRepository.update(body);
    }
    async deleteNotice(id) {
        return await this.noticeRepository.delete(id);
    }
    async getNoticeById(id) {
        return await this.noticeRepository.findNoticeById(id);
    }
};
NoticesService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [Notice_repository_1.NoticeRepository])
], NoticesService);
exports.NoticesService = NoticesService;
//# sourceMappingURL=notices.service.js.map