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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(httpService, appService, jwtService) {
        this.httpService = httpService;
        this.appService = appService;
        this.jwtService = jwtService;
    }
    async login(username, password, response) {
        const user = await this.appService.findIdByUsernameAndPassword({ username, password });
        if (user) {
            const payload = { id: user['id'], username: user['username'] };
            const jwt = this.jwtService.sign(payload);
            response.cookie('jwt', jwt, { httpOnly: true });
            return {
                message: 'success',
            };
        }
        return null;
    }
    async getUser(request) {
        try {
            const cookie = await request.cookies['jwt'];
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
    common_1.Post('api/login'),
    __param(0, common_1.Body('username')),
    __param(1, common_1.Body('password')),
    __param(2, common_1.Res({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "login", null);
__decorate([
    common_1.Get('api/currentUser'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getUser", null);
__decorate([
    common_1.Post('api/logout'),
    __param(0, common_1.Res({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "logout", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [common_1.HttpService,
        app_service_1.AppService,
        jwt_1.JwtService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map