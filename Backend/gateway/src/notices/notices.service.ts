import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class NoticesService {

    constructor(@Inject('NOTICES_SERVICE') private readonly noticeClient: ClientProxy) { }

    async createNotice(data: any) {
        const pattern = { cmd: 'createNotice' };
        const payload = data;
        return this.noticeClient.send<any>(pattern, payload).toPromise();
    }

    async getAllNotices() {
        const pattern = { cmd: 'getAllNotices' };
        const payload = 'getAll';
        return this.noticeClient.send<any>(pattern, payload).toPromise();
    }

    async deleteNoticeById(data: any) {
        const pattern = { cmd: 'deleteNoticeById' };
        const payload = data;
        return this.noticeClient.send<any>(pattern, payload).toPromise();
    }

    async updateNotice(data: any) {
        const pattern = { cmd: 'updateNotice' };
        const payload = data;
        return this.noticeClient.send<any>(pattern, payload).toPromise();
    }

    async getNoticeById(data: any) {
        const pattern = { cmd: 'getNoticeById' };
        const payload = data;
        return this.noticeClient.send<any>(pattern, payload).toPromise();
    }

}
