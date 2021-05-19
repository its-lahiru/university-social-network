import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { NoticesService } from './notices.service';

@Controller()
export class NoticesController {

    constructor(private readonly noticeService: NoticesService) { }

    @Post('api/notices/create')
    async createNotice(@Body() content: string) {
        return await this.noticeService.createNotice(content);
    }

    @Get('api/notices/getAll')
    async getAllNotices() {
        return await this.noticeService.getAllNotices();
    }

    @Patch('api/notices/update/:id')
    async updateNotice(@Param('id') id: string, @Body('content') content: string) {
        return await this.noticeService.updateNotice({ id, content });
    }

    @Delete('api/notices/delete/:id')
    async deleteNotice(@Param('id') id: string) {
        return await this.noticeService.deleteNoticeById(id);
    }

    @Get('api/notices/:id')
    async getNoticeById(@Param('id') id: string) {
        return await this.noticeService.getNoticeById(id);
    }
}
