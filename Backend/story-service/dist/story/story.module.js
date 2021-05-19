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
const microservices_1 = require("@nestjs/microservices");
const mongoose_1 = require("@nestjs/mongoose");
const story_controller_1 = require("./story.controller");
const story_model_1 = require("./story.model");
const story_service_1 = require("./story.service");
let StoryModule = class StoryModule {
};
StoryModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Story', schema: story_model_1.StorySchema }]),
            microservices_1.ClientsModule.register([
                {
                    name: 'STUDENT_SERVICE',
                    transport: microservices_1.Transport.REDIS,
                    options: {
                        url: 'redis://localhost:6379',
                    }
                },
            ]),
        ],
        controllers: [story_controller_1.StoryController],
        providers: [story_service_1.StoryService]
    })
], StoryModule);
exports.StoryModule = StoryModule;
//# sourceMappingURL=story.module.js.map