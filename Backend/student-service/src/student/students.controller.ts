import { Body, Controller, HttpCode, HttpStatus, UsePipes, ValidationPipe } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './schema/Student.schema';

import { StudentService } from './students.service';
import { StudentFacultyValidationPipe } from './validation/student-faculty-validation.pipe';

@Controller()
export class StudentController {
  constructor(private readonly studentService: StudentService) { }


  @MessagePattern({ cmd: 'createStudent' })
  @UsePipes(ValidationPipe)
  // @UsePipes(new StudentFacultyValidationPipe())
  async saveStudent(@Body('data') data: CreateStudentDto) {
    try {
      return await this.studentService.saveStudent(data);
    } catch (error) {
      console.log(`Creation of student with username=${data['username']} is failed...`);
      console.log(error);
    }
  }

  // @MessagePattern({ cmd: 'createStudent' })
  // @UsePipes(ValidationPipe)
  // // @UsePipes(new StudentFacultyValidationPipe())
  // async saveStudent(@Body('data') data: any) {
  //   try {
  //     return await this.studentService.saveStudent(data);
  //   } catch (error) {
  //     console.log(`Creation of student with username=${data['username']} is failed...`);
  //     console.log(error);
  //   }
  // }

  @MessagePattern({ cmd: 'findAllStudents' })
  async getAllStudents() {
    try {
      return await this.studentService.getAllStudents();
    } catch (error) {
      console.log(`Find all students is failed...`);
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'findStudentById' })
  async getStudentById(@Body('id') id: string): Promise<Student> {
    try {
      return await this.studentService.findStudentById(id);
    } catch (error) {
      console.log(`Retrieving student with id=${id} is failed...`);
      console.log(error);
    }
  }

  @MessagePattern({ cmd: 'updateStudent' })
  // @UsePipes(ValidationPipe)
  // @UsePipes(new StudentFacultyValidationPipe())
  async updateStudent(@Body('data') data: UpdateStudentDto) {
    try {
      return await this.studentService.updateStudent(data);
    } catch (error) {
      console.log(`Updating student with id=${data['id']} is failed...`);
      console.log(error);
    }
  }

  // @MessagePattern({ cmd: 'updateStudent' })
  // @UsePipes(ValidationPipe)
  // // @UsePipes(new StudentFacultyValidationPipe())
  // async updateStudent(@Body('data') data: any) {
  //   try {
  //     return await this.studentService.updateStudent(data);
  //   } catch (error) {
  //     console.log(`Updating student with id=${data['id']} is failed...`);
  //     console.log(error);
  //   }
  // }

  @MessagePattern({ cmd: 'deleteStudent' })
  async deleteStudent(@Body('id') id: string) {
    console.log(id);

    try {
      return await this.studentService.deleteStudent(id);
    } catch (error) {
      console.log(`Deleting student with id=${id} is failed..`);
      console.log(error);
    }
  }

  // find user by username and password
  @MessagePattern({ cmd: 'findUserByCredentials' })
  @UsePipes(ValidationPipe)
  async findByUsernameAndPassword(@Body('data') data: any): Promise<Student> {
    try {
      return await this.studentService.findUserByCredentials(data);
    } catch (error) {
      console.log(
        `Retrieving student with username=${data['username']} is failed...`,
      );
      console.log(error);
    }
  }

  // @MessagePattern({ cmd: 'saveUpVotedStoryId' })
  // async saveUpVotedStoryId(@Body('data') data: any) {
  //   try {
  //     return await this.studentService.saveUpVotedStoryId(data);
  //   } catch (error) {
  //     console.log(
  //       `Updating student ${data['authorId']} and adding up voted story is failed... `,
  //     );
  //     console.log(error);
  //   }
  // }
}
