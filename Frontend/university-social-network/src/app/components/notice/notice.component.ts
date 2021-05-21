import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'usn-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {

  authenticated = false;
  notices: any = [];

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      },
    );

    this.httpClient.get('http://localhost:3030/api/notices/getAll', { withCredentials: true })
      .subscribe(
        (res: any) => {
          this.notices = res;
        },
      );
  }

  updateNotice(id: string): void {
    this.httpClient.get(`http://localhost:3030/api/notices/${id}`, { withCredentials: true }).subscribe(
      (res: any) => {
        Emitters.noticeEmitter.emit(res);
      },
      () => {
        console.log('Notice retrieving failed!!');
      },
    );
  }

  deleteNotice(id: string): void {
    this.httpClient.delete(`http://localhost:3030/api/notices/delete/${id}`, { withCredentials: true }).subscribe(
      (res) => {
        this.router.navigate(['/']);
      },
      () => {
        console.log('Notice deletion failed!!');
      }
    );
  }
}
