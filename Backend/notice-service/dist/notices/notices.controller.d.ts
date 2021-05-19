import { NoticesService } from './notices.service';
import { Notice } from './schema/Notice.schema';
export declare class NoticesController {
    private noticesService;
    constructor(noticesService: NoticesService);
    getAllNotices(): Promise<Notice[]>;
    createNotice(data: any): Promise<Notice>;
    updateNotice(body: any): Promise<Notice>;
    deleteNotice(id: string): Promise<void>;
    getNoticeById(id: string): Promise<Notice>;
}
