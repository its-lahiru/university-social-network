import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";
import { Faculty } from "../enum/Faculty.enum";

export class CreateStudentDto {
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsNotEmpty()
    @IsString()
    @IsEnum(Faculty)
    faculty: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}