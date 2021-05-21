import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {

  constructor(
    @Inject('STUDENT_SERVICE') private studentClient: ClientProxy
  ) { }

  async findIdByUsernameAndPassword(data: any): Promise<any> {
    const pattern = { cmd: 'findUserByCredentials' }
    const payload = data;
    return this.studentClient.send<any>(pattern, payload).toPromise();
  }

  async findStudentById(data: any): Promise<any> {
    const pattern = { cmd: 'findStudentById' }
    const payload = data;
    return this.studentClient.send<any>(pattern, payload);
  }
}