import { NoticesService } from './notices.service';
export declare class NoticesController {
    private readonly noticeService;
    constructor(noticeService: NoticesService);
    createNotice(content: string): Promise<any>;
    getAllNotices(): Promise<any>;
    updateNotice(id: string, content: string): Promise<any>;
    deleteNotice(id: string): Promise<any>;
    getNoticeById(id: string): Promise<any>;
}
