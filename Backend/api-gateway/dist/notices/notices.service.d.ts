import { ClientProxy } from '@nestjs/microservices';
export declare class NoticesService {
    private readonly noticeClient;
    constructor(noticeClient: ClientProxy);
    createNotice(data: any): Promise<import("rxjs").Observable<any>>;
    getAllNotices(): Promise<import("rxjs").Observable<any>>;
    deleteNoticeById(data: any): Promise<import("rxjs").Observable<any>>;
    updateNotice(data: any): Promise<import("rxjs").Observable<any>>;
    getNoticeById(data: any): Promise<import("rxjs").Observable<any>>;
}
