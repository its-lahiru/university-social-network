import { ClientProxy } from '@nestjs/microservices';
export declare class AppService {
    private studentClient;
    constructor(studentClient: ClientProxy);
    findIdByUsernameAndPassword(data: any): Promise<any>;
    findStudentById(data: any): Promise<any>;
}
