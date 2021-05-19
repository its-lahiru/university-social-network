import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:3030/api/students';

  constructor(private http: HttpClient) {}

  update(id: string, student: Student): Observable<Student> {
    const url = `${this.apiUrl}/update/${id}`;
    return this.http.patch(url, student, { withCredentials: true });
  }

  delete(id: string) {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.http.delete(url, { withCredentials: true });
  }
}
