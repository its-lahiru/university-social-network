import { ClientProxy } from '@nestjs/microservices';
export declare class NoticesService {
    private readonly noticeClient;
    constructor(noticeClient: ClientProxy);
    createNotice(data: any): Promise<any>;
    getAllNotices(): Promise<any>;
    deleteNoticeById(data: any): Promise<any>;
    updateNotice(data: any): Promise<any>;
    getNoticeById(data: any): Promise<any>;
}
