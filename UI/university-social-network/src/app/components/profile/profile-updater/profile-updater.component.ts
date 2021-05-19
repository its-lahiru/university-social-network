import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Emitters } from 'src/app/components/emitters/emitters';

@Component({
  selector: 'usn-profile-updater',
  templateUrl: './profile-updater.component.html',
  styleUrls: ['./profile-updater.component.css']
})
export class ProfileUpdaterComponent implements OnInit {

  userId!: string;
  firstName!: string;
  lastName!: string;
  faculty!: string;
  email!: string;
  username!: string;

  isEnabled = false;
  authenticated = false;

  form!: FormGroup;

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    );

    Emitters.profileEmitter.subscribe(
      (res: any) => {
        this.userId = res.id;
        this.firstName = res.firstName;
        this.lastName = res.lastName;
        this.faculty = res.faculty;
        this.email = res.email;
        this.username = res.username;
      }
    );

    this.form = this.formBuilder.group({
      firstName: '',
      lastName: '',
      faculty: '',
      email: '',
      username: '',
    });
  }

  enableFields(): void {
    this.isEnabled = true;
  }

  submit(id: string): void {
    this.httpClient.patch(`http://localhost:3030/api/students/update/${id}`, this.form.getRawValue(), { withCredentials: true })
      .subscribe(
        () => {
          this.router.navigate(['/']);
        },
        () => {
          console.log('Profile update failed!');
        }
      );
  }

  // delete user profile
  deleteProfile(id: string) {
    this.httpClient.delete(`http://localhost:3030/api/students/delete/${id}`, { withCredentials: true })
      .subscribe(
        () => {
          this.deleteStoriesByAuthorId(id);
          this.logout();
          this.router.navigate(['/login']);
        },
        () => {
          console.log('Profile deletion failed!');
        }
      );
  }

  // after deleting profile user should be logged out
  logout(): void {
    this.httpClient.post('http://localhost:3000/api/logout', {}, { withCredentials: true })
      .subscribe(
        () => {
          this.authenticated = false;
        }
      );
  }

  // if user deleted the associated stories should also delete
  deleteStoriesByAuthorId(authorId: string) {
    this.httpClient.delete(`http://localhost:3030/api/stories/delete/${authorId}`, { withCredentials: true })
      .subscribe(
        () => {
          this.router.navigate(['/login']);
        },
        () => {
          console.log('Profile deletion failed!');
        }
      );
  }

}
