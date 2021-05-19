import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { Document } from 'mongoose';

export type StoryDocument = Story & Document;

@Schema()
export class Story {
  @Prop({ required: true })
  id: string;

  @IsNotEmpty()
  @IsString()
  @Prop({ required: true })
  authorId: string;

  @IsNotEmpty()
  @IsString()
  @Prop({ required: true })
  username: string;

  @IsNotEmpty()
  @IsString()
  @Prop({ required: true })
  content: string;

  @IsNotEmpty()
  @IsString()
  @Prop({ required: true })
  date: string;

  @IsNotEmpty()
  @IsInt()
  @Prop({ required: true })
  upVotes: number;

  @IsNotEmpty()
  @IsInt()
  @Prop({ required: true })
  downVotes: number;
}

export const StorySchema = SchemaFactory.createForClass(Story);
