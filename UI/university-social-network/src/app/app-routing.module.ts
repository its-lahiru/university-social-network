import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NoticeComponent } from './components/notice/notice.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { StoryUpdaterComponent } from './components/profile/story-updater/story-updater.component';
import { NoticeCreatorComponent } from './components/notice/notice-creator/notice-creator.component';
import { StoryCreatorComponent } from './components/home/story-creator/story-creator.component';
import { AdminComponent } from './components/admin/admin.component';
import { NoticeUpdaterComponent } from './components/notice/notice-updater/notice-updater.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'notices', component: NoticeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'create-story', component: StoryCreatorComponent },
  { path: 'update-story', component: StoryUpdaterComponent },
  { path: 'create-notice', component: NoticeCreatorComponent },
  { path: 'update-notice', component: NoticeUpdaterComponent },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
