import { HttpService } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
import { AppService } from './app.service';
export declare class AppController {
    private httpService;
    private readonly appService;
    private jwtService;
    constructor(httpService: HttpService, appService: AppService, jwtService: JwtService);
    login(username: string, password: string, response: Response): Promise<{
        message: string;
    }>;
    getUser(request: Request): Promise<any>;
    logout(response: Response): Promise<{
        message: string;
    }>;
}
