import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getCurrentUser(): Observable<Student> {
    const url = `${this.apiUrl}/currentUser`;
    return this.http.get(url, { withCredentials: true });
  }

  logout() {
    const url = `${this.apiUrl}/logout`;
    return this.http.post(url, {}, { withCredentials: true });
  }

  login(user: Student): Observable<Student> {
    const url = `${this.apiUrl}/login`;
    return this.http.post('http://localhost:3000/api/login', user, { withCredentials: true });
  }
}
