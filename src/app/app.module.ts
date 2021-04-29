import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './login/admin/admin.component';
import { TeacherComponent } from './login/teacher/teacher.component';
import { StudentComponent } from './login/student/student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

import { StudentViewCardComponent } from '../student-view-card/student-view-card.component';
import {StudentViewComponent} from '../student/student.component';
import { StudentListComponent } from '../student/student-list/student-list.component';
import { StudentDetailsComponent } from '../student/student-details/student-details.component';
import { SchoolViewCardComponent } from '../school-view-card/school-view-card.component';
import { DegreeViewCardComponent } from '../degree-view-card/degree-view-card.component';
import { TeacherViewCardComponent } from '../teacher-view-card/teacher-view-card.component';
import { StudentAddComponent } from '../student/student-add/student-add.component';
import { StudentUpdateComponent } from '../student/student-update/student-update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    TeacherComponent,
    StudentComponent,
    HomeComponent,
    StudentViewCardComponent,
    StudentViewComponent,
    StudentListComponent,
    StudentDetailsComponent,
    SchoolViewCardComponent,
    DegreeViewCardComponent,
    TeacherViewCardComponent,
    StudentAddComponent,
    StudentUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
