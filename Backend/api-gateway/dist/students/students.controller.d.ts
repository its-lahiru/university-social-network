import { StudentsService } from './students.service';
export declare class StudentsController {
    private readonly studentService;
    constructor(studentService: StudentsService);
    createStudent(firstName: string, lastName: string, faculty: string, email: string, username: string, password: string): Promise<import("rxjs").Observable<any>>;
    getAllStudents(): Promise<import("rxjs").Observable<any>>;
    getStudentsById(id: string): Promise<import("rxjs").Observable<any>>;
    updateStudent(id: string, firstName: string, lastName: string, faculty: string, email: string, username: string): Promise<import("rxjs").Observable<any>>;
    deleteStudent(id: string): Promise<import("rxjs").Observable<any>>;
}
