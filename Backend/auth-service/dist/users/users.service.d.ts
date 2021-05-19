import { JwtService } from '@nestjs/jwt';
import { ClientProxy } from '@nestjs/microservices';
export declare class UsersService {
    private studentClient;
    private jwtService;
    constructor(studentClient: ClientProxy, jwtService: JwtService);
    findUser(data: any): Promise<string>;
    findStudentById(data: any): Promise<any>;
}
