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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const microservices_1 = require("@nestjs/microservices");
let UsersService = class UsersService {
    constructor(studentClient, jwtService) {
        this.studentClient = studentClient;
        this.jwtService = jwtService;
    }
    async findUser(data) {
        const pattern = { cmd: 'findUserByCredentials' };
        const payload = data;
        return this.studentClient.send(pattern, payload).toPromise();
    }
    async findStudentById(data) {
        const pattern = { cmd: 'findStudentById' };
        const payload = data;
        return this.studentClient.send(pattern, payload).toPromise();
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('STUDENT_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy,
        jwt_1.JwtService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map