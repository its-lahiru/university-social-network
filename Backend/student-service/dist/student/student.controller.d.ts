import { Faculty } from "./student.model";
import { StudentService } from './student.service';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    saveStudent(firstName: string, lastName: string, studentEmail: string, faculty: Faculty, password: string): Promise<import("./student.model").Student>;
    getAllStudents(): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        studentEmail: string;
        faculty: Faculty;
        password: string;
    }[]>;
    getOneStudent(id: string): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        studentEmail: string;
        faculty: Faculty;
        password: string;
    }>;
    updateStudent(id: string, firstName: string, lastName: string, studentEmail: string, faculty: Faculty, password: string): Promise<import("./student.model").Student>;
    deleteStudent(id: string): Promise<void>;
}
