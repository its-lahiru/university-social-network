import { Model } from 'mongoose';
import { Notice, NoticeDocument } from '../schema/Notice.schema';
export declare class NoticeRepository {
    private noticeModel;
    constructor(noticeModel: Model<NoticeDocument>);
    create(data: any): Promise<Notice>;
    findAll(): Promise<Notice[]>;
    update(data: any): Promise<Notice>;
    delete(id: string): Promise<void>;
    findNoticeById(id: string): Promise<Notice>;
}
