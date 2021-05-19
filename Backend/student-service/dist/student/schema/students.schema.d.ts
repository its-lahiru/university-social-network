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
export declare enum Faculty {
    APPLIED = "APPLIED_SCIENCES",
    MANAGEMENT = "MANAGEMENT_STUDIES",
    AGRICULTURE = "AGRICULTURE",
    GEOMATICS = "GEOMATICS",
    SOCIAL = "SOCIAL SCIENCES",
    TECHNOLOGY = "TECHNOLOGY",
    MEDICAL = "MEDICAL"
}
