import * as mongoose from 'mongoose';
export declare const StudentSchema: mongoose.Schema<mongoose.Document<any, {}>, mongoose.Model<any, any>, undefined>;
export interface Student extends mongoose.Document {
    id: string;
    firstName: string;
    lastName: string;
    studentEmail: string;
    faculty: Faculty;
    password: string;
}
export declare enum Faculty {
    APPLIED = "APPLIED",
    MANAGEMENT = "MANAGEMENT",
    AGRICULTURE = "AGRICULTURE",
    GEOMATICS = "GEOMATICS",
    SOCIAL = "SOCIAL",
    TECHNOLOGY = "TECHNOLOGY"
}
