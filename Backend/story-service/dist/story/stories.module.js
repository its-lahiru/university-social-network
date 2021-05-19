"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const Story_repository_1 = require("./repository/Story.repository");
const stories_controller_1 = require("./stories.controller");
const Story_schema_1 = require("./schema/Story.schema");
const stories_service_1 = require("./stories.service");
let StoryModule = class StoryModule {
};
StoryModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: Story_schema_1.Story.name, schema: Story_schema_1.StorySchema }]),
        ],
        controllers: [stories_controller_1.StoryController],
        providers: [stories_service_1.StoryService, Story_repository_1.StoryRepository],
    })
], StoryModule);
exports.StoryModule = StoryModule;
//# sourceMappingURL=stories.module.js.map