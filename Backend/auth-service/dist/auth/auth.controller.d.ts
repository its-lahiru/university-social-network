import { HttpService } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
import { UsersService } from 'src/users/users.service';
export declare class AuthController {
    private httpService;
    private readonly userService;
    private jwtService;
    constructor(httpService: HttpService, userService: UsersService, jwtService: JwtService);
    login(username: string, password: string, response: Response): Promise<{
        message: string;
    }>;
    getUser(request: Request): Promise<any>;
    logout(response: Response): Promise<{
        message: string;
    }>;
}
