import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { AuthService } from 'src/app/services/auth.service';

import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'usn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage = '';
  authenticated = false;
  userCredentials!: Student;

  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      },
    );
  }

  submit(): void {
    this.userCredentials = this.loginForm.getRawValue();
    this.authService.login(this.userCredentials).subscribe(
      () => (this.router.navigate(['/'])),
      () => (this.errorMessage = 'Username or Password is invalid!!'),
    );
  }
}

// if (!this.loginForm.getRawValue().username && !this.loginForm.getRawValue().password) {
//   this.errorMessage = 'Enter username and Password..';
// }
// else if (!this.loginForm.getRawValue().username) {
//   this.errorMessage = 'Enter username..';
// }
// else if (!this.loginForm.getRawValue().password) {
//   this.errorMessage = 'Enter password..';
// } else {

// }
