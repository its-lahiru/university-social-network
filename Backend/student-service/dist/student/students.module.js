"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const students_controller_1 = require("./students.controller");
const Student_schema_1 = require("./schema/Student.schema");
const students_service_1 = require("./students.service");
const Student_repository_1 = require("./repository/Student.repository");
let StudentModule = class StudentModule {
};
StudentModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: Student_schema_1.Student.name, schema: Student_schema_1.StudentSchema }]),
        ],
        controllers: [students_controller_1.StudentController],
        providers: [students_service_1.StudentService, Student_repository_1.StudentRepository],
    })
], StudentModule);
exports.StudentModule = StudentModule;
//# sourceMappingURL=students.module.js.map