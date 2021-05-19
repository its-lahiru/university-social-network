import { Injectable } from '@nestjs/common';

import { Student } from './schema/Student.schema';
import { StudentRepository } from './repository/Student.repository';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentService {
  constructor(private studentRepository: StudentRepository) {}

  async saveStudent(data: CreateStudentDto): Promise<Student> {
    return await this.studentRepository.create(data);
  }

  // async saveStudent(data: any): Promise<Student> {
  //   return await this.studentRepository.create(data);
  // }

  async getAllStudents(): Promise<Student[]> {
    return await this.studentRepository.findAll();
  }

  async findStudentById(id: string): Promise<Student> {
    return await this.studentRepository.findOne(id);
  }

  async updateStudent(data: UpdateStudentDto): Promise<Student> {
    return await this.studentRepository.update(data);
  }

  // async updateStudent(data: any): Promise<Student> {
  //   return await this.studentRepository.update(data);
  // }

  async deleteStudent(id: string): Promise<void> {
    return await this.studentRepository.delete(id);
  }

  // return the student id only
  async findUserByCredentials(data: any): Promise<Student> {
    return await this.studentRepository.findByUsernameAndPassword(data);
  }

  // async saveUpVotedStoryId(data: any): Promise<any> {
  //   return await this.studentRepository.saveUpVotedStoryId(data);
  // }
}
