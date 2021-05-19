import { Document } from "mongoose";
export declare type NoticeDocument = Notice & Document;
export declare class Notice {
    id: string;
    content: string;
    date: string;
}
export declare const NoticeSchema: import("mongoose").Schema<Document<Notice, {}>, import("mongoose").Model<any, any>, undefined>;
