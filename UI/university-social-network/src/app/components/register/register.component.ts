import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'usn-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  authenticated = false;
  errorMessage = '';

  registerForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(4)]],
    lastName: ['', [Validators.required, Validators.minLength(4)]],
    faculty: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      },
    );
  }

  submit(): void {
    this.httpClient.post('http://localhost:3030/api/students/create', this.registerForm.getRawValue())
      .subscribe(
        () => {
          this.router.navigate(['/login']);
        },
        () => {
          this.errorMessage = 'All fields are required!';
        }
      );
  }
}
