import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private appUrl = 'http://localhost:3030/api/votes';

  constructor(private http: HttpClient) { }

  saveUpVote(userId: string, storyId: string) {
    const url = `${this.appUrl}/saveUpVote/${userId}`;
    return this.http.post(url, { storyId }, { withCredentials: true });

  }

  saveDownVote(userId: string, storyId: string) {
    const url = `${this.appUrl}/saveDownVote/${userId}`;
    return this.http.post(url, { storyId }, { withCredentials: true });
  }

  resetVote(userId: string, storyId: string) {
    const url = `${this.appUrl}/resetVote/${userId}`;
    return this.http.post(url, { storyId }, { withCredentials: true });
  }

  getAllVotes(userId: string) {
    const url = `${this.appUrl}/getAllVotes/${userId}`;
    return this.http.get(url, { withCredentials: true });
  }
}
