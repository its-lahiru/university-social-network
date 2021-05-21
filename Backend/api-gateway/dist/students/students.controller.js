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
exports.StudentsController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth-guard/jwt-auth.guard");
const students_service_1 = require("./students.service");
let StudentsController = class StudentsController {
    constructor(studentService) {
        this.studentService = studentService;
    }
    async createStudent(firstName, lastName, faculty, email, username, password) {
        return await this.studentService.createStudent({
            firstName,
            lastName,
            faculty,
            email,
            username,
            password,
        });
    }
    async getAllStudents() {
        return await this.studentService.getAllStudents();
    }
    async getStudentsById(id) {
        const student = await this.studentService.getStudentById(id);
        return student;
    }
    async updateStudent(id, firstName, lastName, faculty, email, username) {
        const student = await this.studentService.updateStudent({
            id,
            firstName,
            lastName,
            faculty,
            email,
            username,
        });
        return student;
    }
    async deleteStudent(id) {
        return await this.studentService.deleteStudent(id);
    }
};
__decorate([
    common_1.Post('api/students/create'),
    __param(0, common_1.Body('firstName')),
    __param(1, common_1.Body('lastName')),
    __param(2, common_1.Body('faculty')),
    __param(3, common_1.Body('email')),
    __param(4, common_1.Body('username')),
    __param(5, common_1.Body('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "createStudent", null);
__decorate([
    common_1.Get('api/students/getAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "getAllStudents", null);
__decorate([
    common_1.Get('api/students/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "getStudentsById", null);
__decorate([
    common_1.Patch('api/students/update/:id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body('firstName')),
    __param(2, common_1.Body('lastName')),
    __param(3, common_1.Body('faculty')),
    __param(4, common_1.Body('email')),
    __param(5, common_1.Body('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "updateStudent", null);
__decorate([
    common_1.Delete('api/students/delete/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "deleteStudent", null);
StudentsController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [students_service_1.StudentsService])
], StudentsController);
exports.StudentsController = StudentsController;
//# sourceMappingURL=students.controller.js.map