import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NoticesController } from './notices.controller';
import { NoticesService } from './notices.service';
import { NoticeRepository } from './repository/Notice.repository';
import { Notice, NoticeSchema } from './schema/Notice.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Notice.name, schema: NoticeSchema }]),
  ],
  controllers: [NoticesController],
  providers: [NoticesService, NoticeRepository]
})
export class NoticesModule {}
