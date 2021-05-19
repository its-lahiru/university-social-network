import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';

import { StudentController } from './students.controller';
import { Student, StudentSchema } from './schema/Student.schema';
import { StudentService } from './students.service';
import { StudentRepository } from './repository/Student.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
  ],
  controllers: [StudentController],
  providers: [StudentService, StudentRepository],
})
export class StudentModule {}
