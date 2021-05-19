import { ClientProxy } from '@nestjs/microservices';
export declare class StudentsService {
    private readonly studentClient;
    constructor(studentClient: ClientProxy);
    createStudent(data: any): Promise<any>;
    getAllStudents(): Promise<any>;
    getStudentById(data: any): Promise<any>;
    updateStudent(data: any): Promise<any>;
    deleteStudent(id: string): Promise<any>;
}
