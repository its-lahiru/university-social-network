import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'usn-notice-creator',
  templateUrl: './notice-creator.component.html',
  styleUrls: ['./notice-creator.component.css']
})
export class NoticeCreatorComponent implements OnInit {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      content: '',
    });
  }

  submit(): void {
    this.httpClient.post('http://localhost:3030/api/notices/create', this.form.getRawValue(), { withCredentials: true })
      .subscribe(
        () => {
          this.router.navigate(['/notices']);
        }
      );
  }

}
