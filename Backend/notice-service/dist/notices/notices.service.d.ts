import { NoticeRepository } from './repository/Notice.repository';
import { Notice } from './schema/Notice.schema';
export declare class NoticesService {
    private noticeRepository;
    constructor(noticeRepository: NoticeRepository);
    createNotice(data: any): Promise<Notice>;
    getAllNotices(): Promise<Notice[]>;
    updateNotice(body: any): Promise<Notice>;
    deleteNotice(id: string): Promise<void>;
    getNoticeById(id: string): Promise<Notice>;
}
