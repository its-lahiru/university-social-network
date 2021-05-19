"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticesModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const notices_controller_1 = require("./notices.controller");
const notices_service_1 = require("./notices.service");
const Notice_repository_1 = require("./repository/Notice.repository");
const Notice_schema_1 = require("./schema/Notice.schema");
let NoticesModule = class NoticesModule {
};
NoticesModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: Notice_schema_1.Notice.name, schema: Notice_schema_1.NoticeSchema }]),
        ],
        controllers: [notices_controller_1.NoticesController],
        providers: [notices_service_1.NoticesService, Notice_repository_1.NoticeRepository]
    })
], NoticesModule);
exports.NoticesModule = NoticesModule;
//# sourceMappingURL=notices.module.js.map