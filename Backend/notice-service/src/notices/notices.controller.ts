import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { NoticesService } from './notices.service';
import { Notice } from './schema/Notice.schema';

@Controller()
export class NoticesController {

    constructor(private noticesService: NoticesService) { }

    @MessagePattern({ cmd: 'getAllNotices' })
    async getAllNotices(): Promise<Notice[]> {
        try {
            return await this.noticesService.getAllNotices();
        } catch (error) {
            console.log('Notices retrieval is failed..');
            console.log(error);
        }
    }

    @UsePipes(ValidationPipe)
    @MessagePattern({ cmd: 'createNotice' })
    async createNotice(@Body('data') data: any): Promise<Notice> {
        try {
            return await this.noticesService.createNotice(data);
        } catch (error) {
            console.log('Notice creation is failed..');
            console.log(error);
        }
    }

    @UsePipes(ValidationPipe)
    @MessagePattern({ cmd: 'updateNotice' })
    async updateNotice(@Body('body') body: any): Promise<Notice> {
        try {
            return await this.noticesService.updateNotice(body);
        } catch (error) {
            console.log(`Updating of notice with id=${body['id']} is failed..`);
            console.log(error);
        }
    }

    @MessagePattern({ cmd: 'deleteNoticeById' })
    async deleteNotice(@Body('id') id: string): Promise<void> {
        try {
            return await this.noticesService.deleteNotice(id);
        } catch (error) {
            console.log(`Deletion of notice with id=${id} is failed...`);
            console.log(error);
        }
    }

    @MessagePattern({ cmd: 'getNoticeById' })
    async getNoticeById(@Body('id') id: string): Promise<Notice> {
        try {
            return await this.noticesService.getNoticeById(id);
        } catch (error) {
            console.log(`Retrieving of notice with id=${id} is failed...`);
            console.log(error);
        }
    }
}
