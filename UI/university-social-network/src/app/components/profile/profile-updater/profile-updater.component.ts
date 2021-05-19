import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Emitters } from 'src/app/components/emitters/emitters';
import { Student } from 'src/app/models/student.model';
import { AuthService } from 'src/app/services/auth.service';
import { StoryService } from 'src/app/services/story.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'usn-profile-updater',
  templateUrl: './profile-updater.component.html',
  styleUrls: ['./profile-updater.component.css']
})
export class ProfileUpdaterComponent implements OnInit {

  student!: Student;
  form!: FormGroup;

  userId!: string;
  firstName!: string;
  lastName!: string;
  faculty!: string;
  email!: string;
  username!: string;

  isEnabled = false;
  authenticated = false;

  constructor(
    private storyService: StoryService,
    private authService: AuthService,
    private studentService: StudentService,
    private router: Router,
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
    this.student = this.form.getRawValue();
    this.studentService.update(id, this.student).subscribe(
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
    this.studentService.delete(id).subscribe(
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
    this.authService.logout().subscribe(
      () => (this.authenticated = false),
    );
  }

  // if user deleted the associated stories should also delete
  deleteStoriesByAuthorId(authorId: string) {
    this.storyService.deleteStoriesByAuthorId(authorId).subscribe(
      () => {
        this.router.navigate(['/login']);
      }
    );
  }
}
