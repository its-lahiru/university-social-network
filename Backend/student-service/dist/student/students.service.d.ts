import { Student } from './schema/Student.schema';
import { StudentRepository } from './repository/Student.repository';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
export declare class StudentService {
    private studentRepository;
    constructor(studentRepository: StudentRepository);
    saveStudent(data: CreateStudentDto): Promise<Student>;
    getAllStudents(): Promise<Student[]>;
    findStudentById(id: string): Promise<Student>;
    updateStudent(data: UpdateStudentDto): Promise<Student>;
    deleteStudent(id: string): Promise<void>;
    findUserByCredentials(data: any): Promise<Student>;
}
