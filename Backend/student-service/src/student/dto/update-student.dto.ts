import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Faculty } from '../enum/Faculty.enum';

export class UpdateStudentDto {
  @IsNotEmpty()
  id: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  @IsEnum(Faculty)
  faculty: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  username: string;

  @IsString()
  upVotedStoryId: string;

  @IsString()
  downVotedStoryId: string;
}
