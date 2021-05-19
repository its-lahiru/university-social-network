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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const common_1 = require("@nestjs/common");
const student_model_1 = require("./student.model");
const student_service_1 = require("./student.service");
let StudentController = class StudentController {
    constructor(studentService) {
        this.studentService = studentService;
    }
    async saveStudent(firstName, lastName, studentEmail, faculty, password) {
        return await this.studentService.saveStudent(firstName, lastName, studentEmail, faculty, password);
    }
    async getAllStudents() {
        const students = await this.studentService.getAllStudents();
        return students;
    }
    getOneStudent(id) {
        return this.studentService.getOneStudent(id);
    }
    async updateStudent(id, firstName, lastName, studentEmail, faculty, password) {
        const updatedStudent = await this.studentService.updateStudent(id, firstName, lastName, studentEmail, faculty, password);
        return updatedStudent;
    }
    async deleteStudent(id) {
        const student = await this.studentService.deleteStudent(id);
        return student;
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('firstName')),
    __param(1, common_1.Body('lastName')),
    __param(2, common_1.Body('studentEmail')),
    __param(3, common_1.Body('faculty')),
    __param(4, common_1.Body('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "saveStudent", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "getAllStudents", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "getOneStudent", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body('firstName')),
    __param(2, common_1.Body('lastName')),
    __param(3, common_1.Body('studentEmail')),
    __param(4, common_1.Body('faculty')),
    __param(5, common_1.Body('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "updateStudent", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "deleteStudent", null);
StudentController = __decorate([
    common_1.Controller('students'),
    __metadata("design:paramtypes", [student_service_1.StudentService])
], StudentController);
exports.StudentController = StudentController;
//# sourceMappingURL=student.controller.js.map