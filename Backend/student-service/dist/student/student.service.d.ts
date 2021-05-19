import { Model } from 'mongoose';
import { Faculty, Student } from './student.model';
export declare class StudentService {
    private readonly studentModel;
    constructor(studentModel: Model<Student>);
    saveStudent(firstName: string, lastName: string, studentEmail: string, faculty: Faculty, password: string): Promise<Student>;
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
    updateStudent(id: string, firstName: string, lastName: string, studentEmail: string, faculty: Faculty, password: string): Promise<Student>;
    deleteStudent(id: string): Promise<void>;
    findStudent(id: string): Promise<Student>;
}
