import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoticeComponent } from './components/notice/notice.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StoryUpdaterComponent } from './components/profile/story-updater/story-updater.component';
import { NoticeCreatorComponent } from './components/notice/notice-creator/notice-creator.component';
import { StoryCreatorComponent } from './components/home/story-creator/story-creator.component';
import { AdminComponent } from './components/admin/admin.component';
import { NoticeUpdaterComponent } from './components/notice/notice-updater/notice-updater.component';
import { ProfileUpdaterComponent } from './components/profile/profile-updater/profile-updater.component';
import { StoryItemComponent } from './components/home/story-item/story-item.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    NoticeComponent,
    ProfileComponent,
    StoryCreatorComponent,
    StoryUpdaterComponent,
    NoticeCreatorComponent,
    AdminComponent,
    NoticeUpdaterComponent,
    ProfileUpdaterComponent,
    StoryItemComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
