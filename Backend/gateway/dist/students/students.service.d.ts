import { ClientProxy } from '@nestjs/microservices';
export declare class StudentsService {
    private readonly studentClient;
    constructor(studentClient: ClientProxy);
    createStudent(data: any): Promise<import("rxjs").Observable<any>>;
    getAllStudents(): Promise<import("rxjs").Observable<any>>;
    getStudentById(data: any): Promise<import("rxjs").Observable<any>>;
    updateStudent(data: any): Promise<import("rxjs").Observable<any>>;
    deleteStudent(id: string): Promise<import("rxjs").Observable<any>>;
}
