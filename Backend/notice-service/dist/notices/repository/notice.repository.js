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
exports.NoticeRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const uuid_1 = require("uuid");
const Notice_schema_1 = require("../schema/Notice.schema");
const CurrentDateTime_shared_1 = require("../shared/CurrentDateTime.shared");
let NoticeRepository = class NoticeRepository {
    constructor(noticeModel) {
        this.noticeModel = noticeModel;
    }
    async create(data) {
        const newNotice = new this.noticeModel({
            id: uuid_1.v1(),
            content: data['content'],
            date: CurrentDateTime_shared_1.CURRENT_DATE_TIME(),
        });
        if (newNotice) {
            return await newNotice.save();
        }
        throw new common_1.BadRequestException('Notice creation is failed..');
    }
    async findAll() {
        const notices = await this.noticeModel.find();
        if (notices) {
            return notices.map((notice) => ({
                id: notice.id,
                content: notice.content,
                date: notice.date,
            }));
        }
        throw new common_1.NotFoundException('Notices are not found..');
    }
    async update(data) {
        const notice = await this.noticeModel.findOne({ id: data['id'] });
        if (notice) {
            if (data['content']) {
                notice.content = data['content'];
                notice.date = CurrentDateTime_shared_1.CURRENT_DATE_TIME();
            }
            return notice.save();
        }
        throw new common_1.NotFoundException('Notice is not found.. Update failed!');
    }
    async delete(id) {
        const result = await this.noticeModel.deleteOne({ id: id });
        if (result.n === 0) {
            throw new common_1.NotFoundException('Notice not found... Deletion failed!');
        }
    }
    async findNoticeById(id) {
        const notice = this.noticeModel.findOne({ id: id });
        if (notice) {
            return notice;
        }
        throw new common_1.NotFoundException('Notice is not found!');
    }
};
NoticeRepository = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(Notice_schema_1.Notice.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], NoticeRepository);
exports.NoticeRepository = NoticeRepository;
//# sourceMappingURL=Notice.repository.js.map