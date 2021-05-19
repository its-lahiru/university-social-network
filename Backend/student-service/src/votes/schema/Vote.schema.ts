import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { Document } from 'mongoose';

export type VoteDocument = Vote & Document;

@Schema()
export class Vote {
  @Prop({ required: true })
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @Prop()
  upVotedStoryId: string;

  @IsString()
  @Prop()
  downVotedStoryId: string;
}

export const VoteSchema = SchemaFactory.createForClass(Vote);
