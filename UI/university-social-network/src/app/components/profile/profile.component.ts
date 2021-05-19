import {HttpClient} from '@angular/common/http';
import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Emitters} from '../emitters/emitters';

@Component({
  selector: 'usn-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: any;
  authenticated = false;
  stories: any = [];

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      },
    );

    this.httpClient.get('http://localhost:3000/api/currentUser', {withCredentials: true})
      .subscribe(
        (res: any) => {
          Emitters.profileEmitter.emit(res);
          const authorId = res.id;
          this.httpClient.get(`http://localhost:3030/api/stories/getAll/${authorId}`, {withCredentials: true})
            .subscribe(
              (res: any) => {
                this.stories = res;
              },
              (error) => {
                console.log(error);
              },
            );
        },
      );
  }

  deleteStory(storyId: string): void {
    this.httpClient.delete(`http://localhost:3030/api/stories/delete/${storyId}`, {withCredentials: true})
      .subscribe(
        (res) => {
          this.router.navigate(['/']);
        },
        () => {
          console.log('Story deletion failed!!');
        }
      );
  }

  updateStory(id: string): void {
    this.httpClient.get(`http://localhost:3030/api/stories/${id}`, {withCredentials: true})
      .subscribe(
        (res: any) => {
          Emitters.storyEmitter.emit(res);
        },
        () => {
          console.log('Story retrieving failed!!');
        },
      );
  }
}
