"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesModule = void 0;
const common_1 = require("@nestjs/common");
const votes_service_1 = require("./votes.service");
const votes_controller_1 = require("./votes.controller");
const mongoose_1 = require("@nestjs/mongoose");
const Vote_schema_1 = require("./schema/Vote.schema");
const Vote_repository_1 = require("./repository/Vote.repository");
let VotesModule = class VotesModule {
};
VotesModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: Vote_schema_1.Vote.name, schema: Vote_schema_1.VoteSchema }]),
        ],
        providers: [votes_service_1.VotesService, Vote_repository_1.VoteRepository],
        controllers: [votes_controller_1.VotesController]
    })
], VotesModule);
exports.VotesModule = VotesModule;
//# sourceMappingURL=votes.module.js.map