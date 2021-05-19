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
const microservices_1 = require("@nestjs/microservices");
const create_student_dto_1 = require("./dto/create-student.dto");
const update_student_dto_1 = require("./dto/update-student.dto");
const students_service_1 = require("./students.service");
let StudentController = class StudentController {
    constructor(studentService) {
        this.studentService = studentService;
    }
    async saveStudent(data) {
        try {
            return await this.studentService.saveStudent(data);
        }
        catch (error) {
            console.log(`Creation of student with username=${data['username']} is failed...`);
            console.log(error);
        }
    }
    async getAllStudents() {
        try {
            return await this.studentService.getAllStudents();
        }
        catch (error) {
            console.log(`Find all students is failed...`);
            console.log(error);
        }
    }
    async getStudentById(id) {
        try {
            return await this.studentService.findStudentById(id);
        }
        catch (error) {
            console.log(`Retrieving student with id=${id} is failed...`);
            console.log(error);
        }
    }
    async updateStudent(data) {
        try {
            return await this.studentService.updateStudent(data);
        }
        catch (error) {
            console.log(`Updating student with id=${data['id']} is failed...`);
            console.log(error);
        }
    }
    async deleteStudent(id) {
        console.log(id);
        try {
            return await this.studentService.deleteStudent(id);
        }
        catch (error) {
            console.log(`Deleting student with id=${id} is failed..`);
            console.log(error);
        }
    }
    async findByUsernameAndPassword(data) {
        try {
            return await this.studentService.findUserByCredentials(data);
        }
        catch (error) {
            console.log(`Retrieving student with username=${data['username']} is failed...`);
            console.log(error);
        }
    }
};
__decorate([
    microservices_1.MessagePattern({ cmd: 'createStudent' }),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_student_dto_1.CreateStudentDto]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "saveStudent", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'findAllStudents' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "getAllStudents", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'findStudentById' }),
    __param(0, common_1.Body('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "getStudentById", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'updateStudent' }),
    __param(0, common_1.Body('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_student_dto_1.UpdateStudentDto]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "updateStudent", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'deleteStudent' }),
    __param(0, common_1.Body('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "deleteStudent", null);
__decorate([
    microservices_1.MessagePattern({ cmd: 'findUserByCredentials' }),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "findByUsernameAndPassword", null);
StudentController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [students_service_1.StudentService])
], StudentController);
exports.StudentController = StudentController;
//# sourceMappingURL=students.controller.js.map