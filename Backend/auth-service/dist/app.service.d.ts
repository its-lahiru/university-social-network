import { JwtService } from '@nestjs/jwt';
import { ClientProxy } from '@nestjs/microservices';
export declare class AppService {
    private studentClient;
    private jwtService;
    constructor(studentClient: ClientProxy, jwtService: JwtService);
    findIdByUsernameAndPassword(data: any): Promise<string>;
    findStudentById(data: any): Promise<any>;
}
