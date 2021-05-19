import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Story } from 'src/app/models/story.model';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'usn-story-creator',
  templateUrl: './story-creator.component.html',
  styleUrls: ['./story-creator.component.css']
})
export class StoryCreatorComponent implements OnInit {

  authenticated = false;
  form!: FormGroup;
  story!: Story;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private storyService: StoryService) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      content: '',
    });
  }

  onSubmit(): void {
    this.story = this.form.getRawValue();
    this.storyService.save(this.story).subscribe(() => this.router.navigate(['/']));
  }

}
