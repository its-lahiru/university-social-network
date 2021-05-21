"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoriesModule = void 0;
const common_1 = require("@nestjs/common");
const stories_service_1 = require("./stories.service");
const stories_controller_1 = require("./stories.controller");
const microservices_1 = require("@nestjs/microservices");
const jwt_1 = require("@nestjs/jwt");
const jwt_secret_1 = require("../constants/jwt.secret");
let StoriesModule = class StoriesModule {
};
StoriesModule = __decorate([
    common_1.Module({
        imports: [
            jwt_1.JwtModule.register({
                secret: jwt_secret_1.JwtSecret,
            }),
            microservices_1.ClientsModule.register([
                {
                    name: 'STORIES_SERVICE',
                    transport: microservices_1.Transport.REDIS,
                    options: {
                        url: 'redis://localhost:6379',
                    },
                },
            ]),
        ],
        providers: [stories_service_1.StoriesService],
        controllers: [stories_controller_1.StoriesController],
    })
], StoriesModule);
exports.StoriesModule = StoriesModule;
//# sourceMappingURL=stories.module.js.map