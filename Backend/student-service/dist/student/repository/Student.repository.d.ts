import { Model } from 'mongoose';
import { Student, StudentDocument } from '../schema/Student.schema';
import { CreateStudentDto } from '../dto/create-student.dto';
import { UpdateStudentDto } from '../dto/update-student.dto';
export declare class StudentRepository {
    private studentModel;
    constructor(studentModel: Model<StudentDocument>);
    create(data: CreateStudentDto): Promise<Student>;
    findAll(): Promise<Student[]>;
    findOne(id: string): Promise<Student>;
    update(data: UpdateStudentDto): Promise<Student>;
    delete(id: string): Promise<void>;
    findByUsernameAndPassword(data: any): Promise<Student>;
    hashPassword(value: string): Promise<string>;
}
