"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Faculty = exports.StudentSchema = void 0;
const mongoose = require("mongoose");
exports.StudentSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    studentEmail: { type: String, required: true },
    faculty: { type: String, required: true },
    password: { type: String, required: true }
});
var Faculty;
(function (Faculty) {
    Faculty["APPLIED"] = "APPLIED";
    Faculty["MANAGEMENT"] = "MANAGEMENT";
    Faculty["AGRICULTURE"] = "AGRICULTURE";
    Faculty["GEOMATICS"] = "GEOMATICS";
    Faculty["SOCIAL"] = "SOCIAL";
    Faculty["TECHNOLOGY"] = "TECHNOLOGY";
})(Faculty = exports.Faculty || (exports.Faculty = {}));
//# sourceMappingURL=student.model.js.map