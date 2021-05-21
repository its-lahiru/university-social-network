import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { v1 as uuid } from 'uuid';

import { Student, StudentDocument } from '../schema/Student.schema';
import { CreateStudentDto } from '../dto/create-student.dto';
import { UpdateStudentDto } from '../dto/update-student.dto';

@Injectable()
export class StudentRepository {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) { }

  // create student with dto
  async create(data: CreateStudentDto): Promise<Student> {
    // check whether a username already exists
    const userNameExists = await this.studentModel.findOne({
      username: data.username,
    });
    // check whether the email already exists
    const emailExists = await this.studentModel.findOne({
      email: data.email,
    });
    // if username and email already exists throw exception
    if (userNameExists && emailExists) {
      throw new BadRequestException('Username and Email already exists..');
    } else if (userNameExists || emailExists) {
      if (userNameExists) {
        throw new BadRequestException('Username already exists..');
      } else {
        throw new BadRequestException('Email already exists..');
      }
    } else {
      const hashedPassword = await this.hashPassword(data.password);

      // // upvoted story id array. initially empty array
      // const upVotedStoryIds: string[] = [];
      // // downvoted story id array. initially empty array
      // const downVotedStoryIds: string[] = [];
      // create new student object
      const newStudent = new this.studentModel({
        id: uuid(),
        firstName: data.firstName,
        lastName: data.lastName,
        faculty: data.faculty,
        email: data.email,
        username: data.username,
        password: hashedPassword,
        // upVotedStoryIds: upVotedStoryIds,
        // downVotedStoryIds: downVotedStoryIds,
      });
      return await newStudent.save();
    }
  }

  ////// create without dto

  // async create(data: any): Promise<Student> {
  //     // check whether a username already exists
  //     const userNameExists = await this.studentModel.findOne({
  //         username: data['username'],
  //     });
  //     // check whether the email already exists
  //     const emailExists = await this.studentModel.findOne({
  //         email: data['email'],
  //     });
  //     // if username and email already exists throw exception
  //     if (userNameExists && emailExists) {
  //         throw new BadRequestException('Username and Email already exists..');
  //     } else if (userNameExists || emailExists) {
  //         if (userNameExists) {
  //             throw new BadRequestException('Username already exists..');
  //         } else {
  //             throw new BadRequestException('Email already exists..');
  //         }
  //     } else {
  //         const hashedPassword = await this.hashPassword(data['password']);

  //         // upvoted story id array. initially empty array
  //         // const upVotedStoryIds: string[] = [];
  //         // downvoted story id array. initially empty array
  //         // const downVotedStoryIds: string[] = [];
  //         const newStudent = new this.studentModel({
  //             id: uuid(),
  //             firstName: data['firstName'],
  //             lastName: data['lastName'],
  //             faculty: data['faculty'],
  //             email: data['email'],
  //             username: data['username'],
  //             password: hashedPassword,
  //             // upVotedStoryIds: upVotedStoryIds,
  //             // downVotedStoryIds: downVotedStoryIds,
  //         });
  //         return newStudent.save();
  //     }
  // }

  // find all entries
  async findAll(): Promise<Student[]> {
    const students = await this.studentModel.find().exec();
    if (students) {
      return students.map((student) => ({
        id: student.id,
        firstName: student.firstName,
        lastName: student.lastName,
        faculty: student.faculty,
        email: student.email,
        username: student.username,
        password: student.password,
        // upVotedStoryIds: student.upVotedStoryIds,
        // downVotedStoryIds: student.downVotedStoryIds,
      }));
    }
    throw new NotFoundException('Students retrieval is failed..');
  }

  // find all entry
  async findOne(id: string): Promise<Student> {
    const student = await this.studentModel.findOne({ id: id });
    if (student) {
      return student;
    }
    throw new NotFoundException(`Student with id=${id} is not found..`);
  }

  // update student with dto
  async update(data: UpdateStudentDto): Promise<Student> {
    const updatedStudent = await this.studentModel.findOne({ id: data.id });
    // find students by username
    const usersByUsername = await this.studentModel.find({
      username: data.username,
    });
    // find students by email
    const usersByEmail = await this.studentModel.find({ email: data.email });

    if (usersByUsername.length > 1 && usersByEmail.length > 1) {
      throw new BadRequestException('Username and Email already exists!');
    } else if (usersByUsername.length > 1 || usersByEmail.length > 1) {
      if (usersByUsername.length > 1) {
        throw new BadRequestException('Username already exists!');
      }
      throw new BadRequestException('Email already exists!');
    } else {
      // check for not-null fields and update fields
      if (data.firstName) {
        updatedStudent.firstName = data.firstName;
      }
      if (data.lastName) {
        updatedStudent.lastName = data.lastName;
      }
      if (data.faculty) {
        updatedStudent.faculty = data.faculty;
      }
      if (data.email) {
        updatedStudent.email = data.email;
      }
      if (data.username) {
        updatedStudent.username = data.username;
      }
      // if (data.upVotedStoryId) {
      //   updatedStudent.upVotedStoryIds.push(data.upVotedStoryId);
      // }
      // if (data.downVotedStoryId) {
      //   updatedStudent.downVotedStoryIds.push(data.downVotedStoryId);
      // }
      await updatedStudent.save();
    }
    return updatedStudent;
  }

  // update an entry without dto

  // async update(data: any): Promise<Student> {
  //     const updatedStudent = await this.studentModel.findOne({ id: data['id'] });
  //     // find students by username
  //     let usersByUsername = await this.studentModel.find({ username: data['username'] });
  //     // find students by email
  //     const usersByEmail = await this.studentModel.find({ email: data['email'] });

  //     if ((usersByUsername.length > 1) && (usersByEmail.length > 1)) {
  //         throw new BadRequestException('Username and Email already exists!');
  //     }
  //     else if ((usersByUsername.length > 1) || (usersByEmail.length > 1)) {
  //         if (usersByUsername.length > 1) {
  //             throw new BadRequestException('Username already exists!');
  //         }
  //         throw new BadRequestException('Email already exists!');
  //     }
  //     else {
  //         // check for not-null fields and update fields
  //         if (data['firstName']) {
  //             updatedStudent.firstName = data['firstName'];
  //         }
  //         if (data['lastName']) {
  //             updatedStudent.lastName = data['lastName'];
  //         }
  //         if (data['faculty']) {
  //             updatedStudent.faculty = data['faculty'];
  //         }
  //         if (data['email']) {
  //             updatedStudent.email = data['email'];
  //         }
  //         if (data['username']) {
  //             updatedStudent.username = data['username'];
  //         }
  //         // if (data['upVotedStoryId']) {
  //         //     updatedStudent.upVotedStoryIds = updatedStudent.upVotedStoryIds(data['upVotedStoryIds']);
  //         // }
  //         await updatedStudent.save();
  //     }
  //     return updatedStudent;
  // }

  // delete an entry
  async delete(id: string): Promise<void> {
    const result = await this.studentModel.deleteOne({ id: id }).exec();
    if (result.n === 0) {
      throw new NotFoundException(
        `Student with id=${id} not found! Deletion failed!!`,
      );
    }
  }

  // find entry by username and password and return student id only
  async findByUsernameAndPassword(data: any): Promise<Student> {
    const student = await this.studentModel.findOne({
      username: data['username'],
    });
    // if user exists then compare input passowrd with user's password
    if (student) {
      const isMatch = await bcrypt.compare(data['password'], student.password);
      if (isMatch) {
        return student;
      } else {
        throw new BadRequestException('User not found! Invalid password..');
      }
    }
    throw new NotFoundException('Student not found! Invalid username..');
  }

  // hash input password
  async hashPassword(value: string) {
    return await bcrypt.hash(value, 10);
  }

  // async saveUpVotedStoryId(data: any): Promise<any> {
  //   const student = await this.studentModel.findOne({ id: data['authorId'] });
  //   if (student) {
  //     return student.upVotedStoryIds.push(data['storyId']);
  //   }
  //   throw new NotFoundException(
  //     `Student id=${data['authorId']} is not found.. Story saving failed`,
  //   );
  // }

  // async saveDownVotedStoryId(data: any) {
  //   const student = await this.studentModel.findOne({ id: data['authorId'] });
  //   if (student) {
  //     return student.upVotedStoryIds.push(data['storyId']);
  //   }
  // }
  //
  // async deleteUpVotedStoryId(data: any) {
  //   const student = await this.studentModel.findOne({ id: data['authorId'] });
  //   if (student) {
  //     // return student.upVotedStoryIds.(data['storyId']);
  //   }
  // }
  //
  // async deleteDownVotedStoryId(data: any) {
  //   const student = await this.studentModel.findOne({ id: data['authorId'] });
  //   if (student) {
  //     // return student.upVotedStoryIds.push(data['storyId']);
  //   }
  // }
}
