import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Emitters } from 'src/app/components/emitters/emitters';
import { Story } from 'src/app/models/story.model';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'usn-story-updater',
  templateUrl: './story-updater.component.html',
  styleUrls: ['./story-updater.component.css']
})
export class StoryUpdaterComponent implements OnInit {

  form!: FormGroup;
  storyContent!: string;
  storyId!: string;
  story!: Story;

  constructor(
    private storyService: StoryService,
    private router: Router,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    Emitters.storyEmitter.subscribe(
      (res: any) => {
        this.storyContent = res.content;
        this.storyId = res.id;
      },
    );

    this.form = this.formBuilder.group({
      content: `${this.storyContent}`,
    });
  }

  update(id: string): void {
    this.story = this.form.getRawValue();
    this.storyService.update(id, this.story).subscribe(
      () => {
        this.router.navigate(['/profile']);
      }
    );
  }

}
