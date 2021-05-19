import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Emitters } from 'src/app/components/emitters/emitters';
import { VoteService } from 'src/app/services/vote.service';

@Component({
  selector: 'usn-story-item',
  templateUrl: './story-item.component.html',
  styleUrls: ['./story-item.component.css']
})
export class StoryItemComponent implements OnInit {

  @Input() story: any;
  isUpVoteClicked = false;
  isDownVoteClicked = false;
  isResetButtonActive = false;
  votingForm: any;
  voteDetails: any = [];

  constructor(private voteService: VoteService) {}

  ngOnInit(): void {
    const userId = this.story.authorId;
    this.voteService.getAllVotes(userId).subscribe(
      (res: any) => {
        this.voteDetails = res;
        // console.log(this.voteDetails);
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
