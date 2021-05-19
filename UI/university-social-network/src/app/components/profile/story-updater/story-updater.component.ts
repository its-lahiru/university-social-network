import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Emitters } from 'src/app/components/emitters/emitters';

@Component({
  selector: 'usn-story-updater',
  templateUrl: './story-updater.component.html',
  styleUrls: ['./story-updater.component.css']
})
export class StoryUpdaterComponent implements OnInit {

  form!: FormGroup;
  storyContent!: string;
  storyId!: string

  constructor(
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

  submit(id: string): void {
    this.httpClient.patch(`http://localhost:3030/api/stories/update/${id}`, this.form.getRawValue(), { withCredentials: true })
      .subscribe(
        () => {
          this.router.navigate(['/profile']);
        }
      );
  }

}
