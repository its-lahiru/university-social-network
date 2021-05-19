import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { Faculty } from '../enum/Faculty.enum';

@Injectable()
export class StudentFacultyValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!(value.faculty.toUpperCase() in Faculty)) {
      throw new BadRequestException(`${value.faculty} is not a valid faculty`);
    }
    return value;
  }
}
