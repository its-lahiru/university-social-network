import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class StudentsService {
  constructor(
    @Inject('STUDENT_SERVICE') private readonly studentClient: ClientProxy,
  ) {}

  async createStudent(data: any) {
    const pattern = { cmd: 'createStudent' };
    const payload = data;
    return this.studentClient.send<any>(pattern, payload);
  }

  async getAllStudents() {
    const pattern = { cmd: 'findAllStudents' };
    const payload = 'getAll';
    return this.studentClient.send<any>(pattern, payload);
  }

  async getStudentById(data: any) {
    const pattern = { cmd: 'findStudentById' };
    const payload = data;
    return this.studentClient.send<any>(pattern, payload);
  }

  async updateStudent(data: any) {
    const pattern = { cmd: 'updateStudent' };
    const payload = data;
    return this.studentClient.send<any>(pattern, payload);
  }

  async deleteStudent(id: string) {
    const pattern = { cmd: 'deleteStudent' };
    const payload = id;
    return this.studentClient.send<any>(pattern, payload);
  }


}
