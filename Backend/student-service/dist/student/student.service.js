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
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const uuid_1 = require("uuid");
let StudentService = class StudentService {
    constructor(studentModel) {
        this.studentModel = studentModel;
    }
    async saveStudent(firstName, lastName, studentEmail, faculty, password) {
        const newStudent = new this.studentModel({
            id: uuid_1.v1(),
            firstName: firstName,
            lastName: lastName,
            studentEmail: studentEmail,
            faculty: faculty,
            password: password,
        });
        const result = await newStudent.save();
        return newStudent;
    }
    async getAllStudents() {
        const students = await this.studentModel.find().exec();
        return students.map((student) => ({
            id: student.id,
            firstName: student.firstName,
            lastName: student.lastName,
            studentEmail: student.studentEmail,
            faculty: student.faculty,
            password: student.password,
        }));
    }
    async getOneStudent(id) {
        const student = await this.findStudent(id);
        return {
            id: student.id,
            firstName: student.firstName,
            lastName: student.lastName,
            studentEmail: student.studentEmail,
            faculty: student.faculty,
            password: student.password,
        };
    }
    async updateStudent(id, firstName, lastName, studentEmail, faculty, password) {
        const updatedStudent = await this.findStudent(id);
        if (firstName) {
            updatedStudent.firstName = firstName;
        }
        if (lastName) {
            updatedStudent.lastName = lastName;
        }
        if (studentEmail) {
            updatedStudent.studentEmail = studentEmail;
        }
        if (faculty) {
            updatedStudent.faculty = faculty;
        }
        if (password) {
            updatedStudent.password = password;
        }
        updatedStudent.save();
        return updatedStudent;
    }
    async deleteStudent(id) {
        const result = await this.studentModel.deleteOne({ id: id }).exec();
        if (result.n === 0) {
            throw new common_1.NotFoundException('Student not found!');
        }
    }
    async findStudent(id) {
        let student;
        try {
            student = await this.studentModel.findById(id).exec();
        }
        catch (error) {
            throw new common_1.NotFoundException('Student not found!');
        }
        if (!student) {
            throw new common_1.NotFoundException('Student not found!');
        }
        return student;
    }
};
StudentService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Student')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map