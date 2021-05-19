import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Story } from 'src/app/models/story.model';
import { AuthService } from 'src/app/services/auth.service';
import { StoryService } from 'src/app/services/story.service';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'usn-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  authenticated = false;
  message = 'You are not logged in..';
  stories: Story[] = [];
  story!: Story;

  constructor(
    private authService: AuthService,
    private router: Router,
    private httpClient: HttpClient,
    private storyService: StoryService) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(
      (res: any) => {
        this.authenticated = true;
        this.message = `Hi, ${res.username}!`;
        Emitters.authEmitter.emit(true);
      },
      () => {
        this.authenticated = false;
        this.router.navigate(['/login']);
        Emitters.authEmitter.emit(false);
      },
    );

    this.storyService.getAll().subscribe((stories) => (this.stories = stories));
  }

  // submitStory(story: Story) {
  //   this.storyService.save(story).subscribe(() => (this.router.navigate(['/'])));
  // }
}
