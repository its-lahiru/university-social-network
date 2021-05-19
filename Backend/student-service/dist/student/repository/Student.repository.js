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
exports.StudentRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
const uuid_1 = require("uuid");
const Student_schema_1 = require("../schema/Student.schema");
let StudentRepository = class StudentRepository {
    constructor(studentModel) {
        this.studentModel = studentModel;
    }
    async create(data) {
        const userNameExists = await this.studentModel.findOne({
            username: data.username,
        });
        const emailExists = await this.studentModel.findOne({
            email: data.email,
        });
        if (userNameExists && emailExists) {
            throw new common_1.BadRequestException('Username and Email already exists..');
        }
        else if (userNameExists || emailExists) {
            if (userNameExists) {
                throw new common_1.BadRequestException('Username already exists..');
            }
            else {
                throw new common_1.BadRequestException('Email already exists..');
            }
        }
        else {
            const hashedPassword = await this.hashPassword(data.password);
            const newStudent = new this.studentModel({
                id: uuid_1.v1(),
                firstName: data.firstName,
                lastName: data.lastName,
                faculty: data.faculty,
                email: data.email,
                username: data.username,
                password: hashedPassword,
            });
            return await newStudent.save();
        }
    }
    async findAll() {
        const students = await this.studentModel.find().exec();
        if (students) {
            return students.map((student) => ({
                id: student.id,
                firstName: student.firstName,
                lastName: student.lastName,
                faculty: student.faculty,
                email: student.email,
                username: student.username,
                password: student.password,
            }));
        }
        throw new common_1.NotFoundException('Students retrieval is failed..');
    }
    async findOne(id) {
        const student = await this.studentModel.findOne({ id: id });
        if (student) {
            return student;
        }
        throw new common_1.NotFoundException(`Student with id=${id} is not found..`);
    }
    async update(data) {
        const updatedStudent = await this.studentModel.findOne({ id: data.id });
        const usersByUsername = await this.studentModel.find({
            username: data.username,
        });
        const usersByEmail = await this.studentModel.find({ email: data.email });
        if (usersByUsername.length > 1 && usersByEmail.length > 1) {
            throw new common_1.BadRequestException('Username and Email already exists!');
        }
        else if (usersByUsername.length > 1 || usersByEmail.length > 1) {
            if (usersByUsername.length > 1) {
                throw new common_1.BadRequestException('Username already exists!');
            }
            throw new common_1.BadRequestException('Email already exists!');
        }
        else {
            if (data.firstName) {
                updatedStudent.firstName = data.firstName;
            }
            if (data.lastName) {
                updatedStudent.lastName = data.lastName;
            }
            if (data.faculty) {
                updatedStudent.faculty = data.faculty;
            }
            if (data.email) {
                updatedStudent.email = data.email;
            }
            if (data.username) {
                updatedStudent.username = data.username;
            }
            await updatedStudent.save();
        }
        return updatedStudent;
    }
    async delete(id) {
        const result = await this.studentModel.deleteOne({ id: id }).exec();
        if (result.n === 0) {
            throw new common_1.NotFoundException(`Student with id=${id} not found! Deletion failed!!`);
        }
    }
    async findByUsernameAndPassword(data) {
        const student = await this.studentModel.findOne({
            username: data['username'],
        });
        if (student) {
            const isMatch = await bcrypt.compare(data['password'], student.password);
            if (isMatch) {
                return student;
            }
            else {
                throw new common_1.BadRequestException('User not found! Invalid password..');
            }
        }
        throw new common_1.NotFoundException('Student not found! Invalid username..');
    }
    async hashPassword(value) {
        return await bcrypt.hash(value, 10);
    }
};
StudentRepository = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(Student_schema_1.Student.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], StudentRepository);
exports.StudentRepository = StudentRepository;
//# sourceMappingURL=Student.repository.js.map