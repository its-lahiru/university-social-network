import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Story } from '../models/story.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  private apiUrl = 'http://localhost:3030/api/stories';

  constructor(private http: HttpClient) { }

  save(story: Story): Observable<Story> {
    const url = `${this.apiUrl}/create`;
    return this.http.post<Story>(url, story, { withCredentials: true });
  }

  getAll(): Observable<Story[]> {
    const url = `${this.apiUrl}/getAll`;
    return this.http.get<Story[]>(url, { withCredentials: true });
  }

  delete(id: string) {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.http.delete(url, { withCredentials: true });
  }

  getOne(id: string) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url, { withCredentials: true });
  }

  update(id: string, story: Story): Observable<Story> {
    const url = `${this.apiUrl}/update/${id}`;
    return this.http.patch<Story>(url, story, { withCredentials: true });
  }

  getAllByAuthorId(authorId: string) {
    const url = `${this.apiUrl}/getAll/${authorId}`;
    return this.http.get<Story>(url, { withCredentials: true });
  }

  deleteStoriesByAuthorId(authorId: string) {
    const url = `${this.apiUrl}/deleteByAuthorId/${authorId}`;
    return this.http.delete(url, { withCredentials: true });
  }
}
