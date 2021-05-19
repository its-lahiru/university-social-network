"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorySchema = void 0;
const mongoose = require("mongoose");
exports.StorySchema = new mongoose.Schema({
    content: { type: String, required: true },
    date: { type: String, required: true },
    upvotes: { type: Number, required: true },
    downvotes: { type: Number, required: true },
});
//# sourceMappingURL=story.model.js.map