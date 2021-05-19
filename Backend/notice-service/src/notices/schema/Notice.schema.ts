import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsNotEmpty, IsString } from "class-validator";
import { Document } from "mongoose";

export type NoticeDocument = Notice & Document;

@Schema()
export class Notice {
    @Prop({ required: true })
    id: string;

    @IsNotEmpty()
    @IsString()
    @Prop({ required: true })
    content: string;

    @IsNotEmpty()
    @IsString()
    @Prop({ required: true })
    date: string;
}

export const NoticeSchema = SchemaFactory.createForClass(Notice);

