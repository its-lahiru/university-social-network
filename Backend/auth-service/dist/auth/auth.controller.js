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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
let AuthController = class AuthController {
    constructor(httpService, userService, jwtService) {
        this.httpService = httpService;
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async login(username, password, response) {
        const userId = await this.appService.findIdByUsernameAndPassword({ username, password });
        if (userId) {
            const jwt = this.jwtService.sign({ id: userId });
            response.cookie('jwt', jwt, { httpOnly: true });
            return {
                message: 'success',
            };
        }
        return null;
    }
    async getUser(request) {
        try {
            const cookie = request.cookies['jwt'];
            const data = await this.jwtService.verify(cookie);
            if (!data) {
                throw new common_1.UnauthorizedException('Unauthorized user!!');
            }
            const userId = data['id'];
            const user = await this.appService.findStudentById(userId);
            return user;
        }
        catch (e) {
            throw new common_1.UnauthorizedException('Unauthorized user!!');
        }
    }
    async logout(response) {
        response.clearCookie('jwt');
        return {
            message: 'success',
        };
    }
};
__decorate([
    common_1.Post('api/auth/login'),
    __param(0, common_1.Body('username')),
    __param(1, common_1.Body('password')),
    __param(2, common_1.Res({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    common_1.Get('api/currentUser'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getUser", null);
__decorate([
    common_1.Post('api/logout'),
    __param(0, common_1.Res({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
AuthController = __decorate([
    common_1.Controller('auth'),
    __metadata("design:paramtypes", [common_1.HttpService,
        users_service_1.UsersService,
        jwt_1.JwtService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map