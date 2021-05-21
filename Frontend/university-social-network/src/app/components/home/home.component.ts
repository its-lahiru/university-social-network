import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Story } from 'src/app/models/story.model';
import { Vote } from 'src/app/models/vote.model';
import { AuthService } from 'src/app/services/auth.service';
import { StoryService } from 'src/app/services/story.service';
import { VoteService } from 'src/app/services/vote.service';
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
  // story!: Story;
  currentUserVotes!: Vote[];

  constructor(
    private voteService: VoteService,
    private authService: AuthService,
    private router: Router,
    private storyService: StoryService) { }

  ngOnInit(): void {
    // get current user details
    this.authService.getCurrentUser().subscribe(
      (user: any) => {
        this.authenticated = true;
        this.message = `Hi, ${user.username}!`;
        Emitters.authEmitter.emit(true);
        
        console.log(user.id);
        
        // get votes by current user id
        this.voteService.getVotesByCurrentUserId(user.id)
          .subscribe(
            (votes) => {
              // this.currentUserVotes = votes;
              Emitters.currentUserVotesEmitter.emit(votes);
              console.log(votes);
            }
          );
      },
      () => {
        this.authenticated = false;
        this.router.navigate(['/login']);
        Emitters.authEmitter.emit(false);
      },
    );

    this.storyService.getAll().subscribe(
      (stories) => (this.stories = stories)
    );
  }
}
