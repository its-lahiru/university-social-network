import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { v1 as uuid } from 'uuid';

import { Notice, NoticeDocument } from '../schema/Notice.schema';
import { CURRENT_DATE_TIME } from '../shared/CurrentDateTime.shared';

@Injectable()
export class NoticeRepository {
  constructor(
    @InjectModel(Notice.name) private noticeModel: Model<NoticeDocument>,
  ) {}

  async create(data: any): Promise<Notice> {
    const newNotice = new this.noticeModel({
      id: uuid(),
      content: data['content'],
      date: CURRENT_DATE_TIME(),
    });
    if (newNotice) {
      return await newNotice.save();
    }
    throw new BadRequestException('Notice creation is failed..');
  }

  async findAll(): Promise<Notice[]> {
    const notices = await this.noticeModel.find();

    if (notices) {
      return notices.map((notice) => ({
        id: notice.id,
        content: notice.content,
        date: notice.date,
      }));
    }
    throw new NotFoundException('Notices are not found..');
  }

  async update(data: any): Promise<Notice> {
    const notice = await this.noticeModel.findOne({ id: data['id'] });
    if (notice) {
      if (data['content']) {
        notice.content = data['content'];
        notice.date = CURRENT_DATE_TIME();
      }
      return notice.save();
    }
    throw new NotFoundException('Notice is not found.. Update failed!');
  }

  async delete(id: string): Promise<void> {
    const result = await this.noticeModel.deleteOne({ id: id });
    if (result.n === 0) {
      throw new NotFoundException('Notice not found... Deletion failed!');
    }
  }

  async findNoticeById(id: string): Promise<Notice> {
    const notice = this.noticeModel.findOne({ id: id });
    if (notice) {
      return notice;
    }
    throw new NotFoundException('Notice is not found!');
  }
}
