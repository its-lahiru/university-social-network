import { NoticesService } from './notices.service';
export declare class NoticesController {
    private readonly noticeService;
    constructor(noticeService: NoticesService);
    createNotice(content: string): Promise<import("rxjs").Observable<any>>;
    getAllNotices(): Promise<import("rxjs").Observable<any>>;
    updateNotice(id: string, content: string): Promise<import("rxjs").Observable<any>>;
    deleteNotice(id: string): Promise<import("rxjs").Observable<any>>;
    getNoticeById(id: string): Promise<import("rxjs").Observable<any>>;
}
