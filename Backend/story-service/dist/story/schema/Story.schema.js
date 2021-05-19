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
exports.StorySchema = exports.Story = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const class_validator_1 = require("class-validator");
let Story = class Story {
};
__decorate([
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Story.prototype, "id", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Story.prototype, "authorId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Story.prototype, "username", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Story.prototype, "content", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", String)
], Story.prototype, "date", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsInt(),
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", Number)
], Story.prototype, "upVotes", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsInt(),
    mongoose_1.Prop({ required: true }),
    __metadata("design:type", Number)
], Story.prototype, "downVotes", void 0);
Story = __decorate([
    mongoose_1.Schema()
], Story);
exports.Story = Story;
exports.StorySchema = mongoose_1.SchemaFactory.createForClass(Story);
//# sourceMappingURL=Story.schema.js.map