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
exports.NoticesController = void 0;
const common_1 = require("@nestjs/common");
const notices_service_1 = require("./notices.service");
let NoticesController = class NoticesController {
    constructor(noticeService) {
        this.noticeService = noticeService;
    }
    async createNotice(content) {
        return await this.noticeService.createNotice(content);
    }
    async getAllNotices() {
        return await this.noticeService.getAllNotices();
    }
    async updateNotice(id, content) {
        return await this.noticeService.updateNotice({ id, content });
    }
    async deleteNotice(id) {
        return await this.noticeService.deleteNoticeById(id);
    }
    async getNoticeById(id) {
        return await this.noticeService.getNoticeById(id);
    }
};
__decorate([
    common_1.Post('api/notices/create'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NoticesController.prototype, "createNotice", null);
__decorate([
    common_1.Get('api/notices/getAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NoticesController.prototype, "getAllNotices", null);
__decorate([
    common_1.Patch('api/notices/update/:id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body('content')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], NoticesController.prototype, "updateNotice", null);
__decorate([
    common_1.Delete('api/notices/delete/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NoticesController.prototype, "deleteNotice", null);
__decorate([
    common_1.Get('api/notices/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NoticesController.prototype, "getNoticeById", null);
NoticesController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [notices_service_1.NoticesService])
], NoticesController);
exports.NoticesController = NoticesController;
//# sourceMappingURL=notices.controller.js.map