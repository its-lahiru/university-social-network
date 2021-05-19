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
const microservices_1 = require("@nestjs/microservices");
const notices_service_1 = require("./notices.service");
let NoticesController = class NoticesController {
    constructor(noticesService) {
        this.noticesService = noticesService;
    }
    async getAllNotices() {
        try {
            return await this.noticesService.getAllNotices();
        }
        catch (error) {
            console.log('Notices retrieval is failed..');
            console.log(error);
        }
    }
    async createNotice(data) {
        try {
            return await this.noticesService.createNotice(data);
        }
        catch (error) {
            console.log('Notice creation is failed..');
            console.log(error);
        }
    }
    async updateNotice(body) {
        try {
            return await this.noticesService.updateNotice(body);
        }
        catch (error) {
            console.log(`Updating of notice with id=${body['id']} is failed..`);
            console.log(error);
        }
    }
    async deleteNotice(id) {
        try {
            return await this.noticesService.deleteNotice(id);
        }
        catch (error) {
            console.log(`Deletion of notice with id=${id} is failed...`);
            console.log(error);
        }
    }
    async getNoticeById(id) {
        try {
            return await this.noticesService.getNoticeById(id);
        }
        catch (error) {
            console.log(`Retrieving of notice with id=${id} is failed...`);
            console.log(error);
        }
    }
};
__decorate([
    microservices_1.MessagePattern({ cmd: 'getAllNotices' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NoticesController.prototype, "getAllNotices", null);
__decorate([
    common_1.UsePipes(common_1.ValidationPipe),
    microservices_1.MessagePattern({ cmd: 'createNotice' }),
    __param(0, common_1.Body('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NoticesController.prototype, "createNotice", null);
__decorate([
    common_1.UsePipes(common_1.ValidationPipe),
    microservices_1.MessagePattern({ cmd: 'updateNotice' }),
    __param(0, common_1.Body('body')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NoticesController.prototype, "updateNotice", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'deleteNoticeById' }),
    __param(0, common_1.Body('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NoticesController.prototype, "deleteNotice", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'getNoticeById' }),
    __param(0, common_1.Body('id')),
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