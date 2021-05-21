import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Emitters } from 'src/app/components/emitters/emitters';
import { Student } from 'src/app/models/student.model';
import { AuthService } from 'src/app/services/auth.service';
import { VoteService } from 'src/app/services/vote.service';
import { pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Vote } from 'src/app/models/vote.model';

@Component({
  selector: 'usn-story-item',
  templateUrl: './story-item.component.html',
  styleUrls: ['./story-item.component.css']
})
export class StoryItemComponent implements OnInit {

  @Input() story: any;
  @Input() currentUserVotes!: Vote[];
  // @Input() currentUserVotes: any;

  currentUserId!: string;
  isUpVoteClicked = false;
  isDownVoteClicked = false;
  isResetButtonActive = false;

  // votingForm: any;
  // voteDetails: any = [];
  // currentUserId!: string;

  constructor(
    private authService: AuthService,
    private voteService: VoteService) { }

  ngOnInit(): void {
    // get current user votes
    Emitters.currentUserVotesEmitter.subscribe(
      (votes: Vote[]) => {
        this.currentUserVotes = votes
        // console.log(this.currentUserVotes);
        for (let vote of this.currentUserVotes) {
          if (vote.upVotedStoryId === this.story.id) {
            this.isUpVoteClicked = true;
            this.isResetButtonActive = true;
          }
          if (vote.downVotedStoryId === this.story.id) {
            this.isDownVoteClicked = true;
            this.isResetButtonActive = true;
          }
        }
      }
    );

    // get current user id
    this.authService.getCurrentUser().subscribe(
      (user: any) => {
        this.currentUserId = user.id;
      },
    );


  }

  // save upVote
  upVote(userId: string, storyId: string): void {
    this.isUpVoteClicked = true;
    this.isDownVoteClicked = false;
    this.isResetButtonActive = true;
    this.voteService.saveUpVote(userId, storyId).subscribe();
  }

  // save downVote
  downVote(userId: string, storyId: string): void {
    this.isDownVoteClicked = true;
    this.isUpVoteClicked = false;
    this.isResetButtonActive = true;
    this.voteService.saveDownVote(userId, storyId).subscribe();
  }

  // reset vote
  resetVote(userId: string, storyId: string): void {
    this.voteService.resetVote(userId, storyId).subscribe(
      () => {
        this.isResetButtonActive = false;
        this.isDownVoteClicked = false;
        this.isUpVoteClicked = false;
      },
    );
  }
}
