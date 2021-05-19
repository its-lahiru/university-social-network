import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Document } from 'mongoose';

import { Faculty } from '../enum/Faculty.enum';

export type StudentDocument = Student & Document;

@Schema()
export class Student {
  @Prop({ required: true })
  id: string;

  @IsNotEmpty()
  @IsString()
  @Prop({ required: true })
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @Prop({ required: true })
  lastName: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(Faculty)
  @Prop({ required: true })
  faculty: string;

  @IsNotEmpty()
  @IsEmail()
  @IsString()
  @Prop({ required: true })
  email: string;

  @IsNotEmpty()
  @IsString()
  @Prop({ required: true })
  username: string;

  @IsString()
  @IsNotEmpty()
  @Prop({ required: true })
  password: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
