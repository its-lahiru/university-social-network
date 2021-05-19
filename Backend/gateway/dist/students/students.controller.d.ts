import { StudentsService } from './students.service';
export declare class StudentsController {
    private readonly studentService;
    constructor(studentService: StudentsService);
    createStudent(firstName: string, lastName: string, faculty: string, email: string, username: string, password: string): Promise<any>;
    getAllStudents(): Promise<any>;
    getStudentsById(id: string): Promise<any>;
    updateStudent(id: string, firstName: string, lastName: string, faculty: string, email: string, username: string): Promise<any>;
    deleteStudent(id: string): Promise<any>;
}
