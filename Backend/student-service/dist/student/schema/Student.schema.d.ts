import { Document } from 'mongoose';
export declare type StudentDocument = Student & Document;
export declare class Student {
    id: string;
    firstName: string;
    lastName: string;
    faculty: string;
    email: string;
    username: string;
    password: string;
}
export declare const StudentSchema: import("mongoose").Schema<Document<Student, {}>, import("mongoose").Model<any, any>, undefined>;
