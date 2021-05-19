import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StoryService } from 'src/app/services/story.service';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'usn-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: any;
  authenticated = false;
  stories: any = [];

  constructor(
    private authService: AuthService,
    private storyService: StoryService,
    private router: Router) {
  }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      },
    );

    this.authService.getCurrentUser().subscribe(
      (res: any) => {
        Emitters.profileEmitter.emit(res);
        const authorId = res.id;
        this.storyService.getAllByAuthorId(authorId).subscribe(
          (res: any) => {
            this.stories = res;
          }
        );
      },
    );
  }

  deleteStory(id: string): void {
    this.storyService.delete(id).subscribe(
      () => this.router.navigate(['/']),
    );
  }

  getStory(id: string): void {
    this.storyService.getOne(id).subscribe(
      (res: any) => {
        Emitters.storyEmitter.emit(res);
      },
    );
  }
}
