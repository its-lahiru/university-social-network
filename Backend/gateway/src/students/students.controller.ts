import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth-guard/jwt-auth.guard';
import { StudentsService } from './students.service';

@Controller()
export class StudentsController {
  constructor(private readonly studentService: StudentsService) {
  }

  @Post('api/students/create')
  async createStudent(
    @Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
    @Body('faculty') faculty: string,
    @Body('email') email: string,
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    return await this.studentService.createStudent({
      firstName,
      lastName,
      faculty,
      email,
      username,
      password,
    });
  }

  // @UseGuards(JwtAuthGuard)
  @Get('api/students/getAll')
  async getAllStudents() {
    return await this.studentService.getAllStudents();
  }

  // @UseGuards(JwtAuthGuard)
  @Get('api/students/:id')
  async getStudentsById(@Param('id') id: string) {
    const student = await this.studentService.getStudentById(id);
    return student;
  }

  // @UseGuards(JwtAuthGuard)
  @Patch('api/students/update/:id')
  async updateStudent(
    @Param('id') id: string,
    @Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
    @Body('faculty') faculty: string,
    @Body('email') email: string,
    @Body('username') username: string,
  ) {
    const student = await this.studentService.updateStudent({
      id,
      firstName,
      lastName,
      faculty,
      email,
      username,
    });
    return student;
  }

  // @UseGuards(JwtAuthGuard)
  @Delete('api/students/delete/:id')
  async deleteStudent(@Param('id') id: string) {
    return await this.studentService.deleteStudent(id);
  }


}
