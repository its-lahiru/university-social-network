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
exports.VoteSchema = exports.Vote = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const class_validator_1 = require("class-validator");
let Vote = class Vote {
};
__decorate([
    mongoose_1.Prop({ required: true }),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], Vote.prototype, "userId", void 0);
__decorate([
    class_validator_1.IsString(),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Vote.prototype, "upVotedStoryId", void 0);
__decorate([
    class_validator_1.IsString(),
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Vote.prototype, "downVotedStoryId", void 0);
Vote = __decorate([
    mongoose_1.Schema()
], Vote);
exports.Vote = Vote;
exports.VoteSchema = mongoose_1.SchemaFactory.createForClass(Vote);
//# sourceMappingURL=Vote.schema.js.map