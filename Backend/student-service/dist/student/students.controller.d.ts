import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './schema/Student.schema';
import { StudentService } from './students.service';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    saveStudent(data: CreateStudentDto): Promise<Student>;
    getAllStudents(): Promise<Student[]>;
    getStudentById(id: string): Promise<Student>;
    updateStudent(data: UpdateStudentDto): Promise<Student>;
    deleteStudent(id: string): Promise<void>;
    findByUsernameAndPassword(data: any): Promise<Student>;
}
