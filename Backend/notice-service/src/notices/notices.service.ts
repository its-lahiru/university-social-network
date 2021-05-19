import { Inject, Injectable } from '@nestjs/common';
import { NoticeRepository } from './repository/Notice.repository';
import { Notice } from './schema/Notice.schema';

@Injectable()
export class NoticesService {

    constructor(private noticeRepository: NoticeRepository){}

    async createNotice(data: any): Promise<Notice> {
        return await this.noticeRepository.create(data);
    }

    async getAllNotices(): Promise<Notice[]> {
        return await this.noticeRepository.findAll();
    }

    async updateNotice(body: any): Promise<Notice> {
        return await this.noticeRepository.update(body);
    }

    async deleteNotice(id: string): Promise<void> {
        return await this.noticeRepository.delete(id);
    }

    async getNoticeById(id: string): Promise<Notice> {
        return await this.noticeRepository.findNoticeById(id);
    }
}
