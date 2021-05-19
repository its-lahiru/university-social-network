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
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const Student_repository_1 = require("./repository/Student.repository");
let StudentService = class StudentService {
    constructor(studentRepository) {
        this.studentRepository = studentRepository;
    }
    async saveStudent(data) {
        return await this.studentRepository.create(data);
    }
    async getAllStudents() {
        return await this.studentRepository.findAll();
    }
    async findStudentById(id) {
        return await this.studentRepository.findOne(id);
    }
    async updateStudent(data) {
        return await this.studentRepository.update(data);
    }
    async deleteStudent(id) {
        return await this.studentRepository.delete(id);
    }
    async findUserByCredentials(data) {
        return await this.studentRepository.findByUsernameAndPassword(data);
    }
};
StudentService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [Student_repository_1.StudentRepository])
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=students.service.js.map