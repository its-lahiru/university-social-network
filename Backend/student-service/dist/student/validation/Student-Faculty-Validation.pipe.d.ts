import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class StudentFacultyValidationPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
