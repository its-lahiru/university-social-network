import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Emitters } from 'src/app/components/emitters/emitters';

@Component({
  selector: 'usn-notice-updater',
  templateUrl: './notice-updater.component.html',
  styleUrls: ['./notice-updater.component.css']
})
export class NoticeUpdaterComponent implements OnInit {

  noticeContent!: string;
  form!: FormGroup;
  noticeId!: string;

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    Emitters.noticeEmitter.subscribe(
      (res: any) => {
        this.noticeContent = res.content;
        this.noticeId = res.id;
      }
    )

    this.form = this.formBuilder.group({
      content: `${this.noticeContent}`,
    });
  }

  submit(id: string): void {
    this.httpClient.patch(`http://localhost:3030/api/notices/update/${id}`, this.form.getRawValue(), { withCredentials: true })
      .subscribe(
        () => {
          this.router.navigate(['/notices']);
        },
      );
  }

}
