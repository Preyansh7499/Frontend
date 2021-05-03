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

import { StudentViewCardComponent } from './student-view-card/student-view-card.component';
import {StudentViewComponent} from './student/student.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { SchoolViewCardComponent } from './school-view-card/school-view-card.component';
import { DegreeViewCardComponent } from './degree-view-card/degree-view-card.component';
import { TeacherViewCardComponent } from './teacher-view-card/teacher-view-card.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentUpdateComponent } from './student/student-update/student-update.component';
import { StudentDeleteComponent } from './student/student-delete/student-delete.component';
import { SetProctorComponent } from './student/set-proctor/set-proctor.component';
import { CoursesComponent } from './courses/courses.component';
import { StudentCoursesComponent } from './courses/student-courses/student-courses.component';
import { TeacherCoursesComponent } from './courses/teacher-courses/teacher-courses.component';
import { StudentCoursePageComponent } from './courses/student-course-page/student-course-page.component';
import { StudentCourseDetailsComponent } from './courses/student-course-page/student-course-details/student-course-details.component';
import { StudentCourseListComponent } from './courses/student-course-page/student-course-list/student-course-list.component';
import { RegisterComponent } from './register/register.component';
import { RegisterStudentComponent } from './register/register-student/register-student.component';
import { RegisterTeacherComponent } from './register/register-teacher/register-teacher.component';
import { ListComponent } from './register/register-student/list/list.component';
import { EnrollComponent } from './register/register-student/enroll/enroll.component';
import { RegisterStudentDetailsComponent } from './register/register-student/register-student-details/register-student-details.component';
import { TeachingListComponent } from './register/register-teacher/teaching-list/teaching-list.component';
import { TeachingEnrollComponent } from './register/register-teacher/teaching-enroll/teaching-enroll.component';

import { TeachercrudComponent } from './teachercrud/teachercrud.component';
import { TeacherlistComponent } from './teachercrud/teacherlist/teacherlist.component';
import { TeacheraddComponent } from './teachercrud/teacheradd/teacheradd.component';
import { TeacherdetailsComponent } from './teachercrud/teacherdetails/teacherdetails.component';
import { TeacherupdateComponent } from './teachercrud/teacherupdate/teacherupdate.component';
import { TeacherdeleteComponent } from './teachercrud/teacherdelete/teacherdelete.component';
import { TeacherupdatebyidComponent } from './teachercrud/teacherupdatebyid/teacherupdatebyid.component';

import { SchoolcrudComponent } from './schoolcrud/schoolcrud.component';
import { SchoollistComponent } from './schoolcrud/schoollist/schoollist.component';
import { SchooldetailsComponent } from './schoolcrud/schooldetails/schooldetails.component';
import { SchooladdComponent } from './schoolcrud/schooladd/schooladd.component';
import { SchoolteacherlisthodComponent } from './schoolcrud/schoolteacherlisthod/schoolteacherlisthod.component';
import { SchoolteacherlistdeanComponent } from './schoolcrud/schoolteacherlistdean/schoolteacherlistdean.component';
import { SchooldeleteComponent } from './schoolcrud/schooldelete/schooldelete.component';
import { LogoutComponent } from './logout/logout.component';
import { CoursePageViewComponent } from './course-page-view/course-page-view.component';
import { CoursePageViewTeacherComponent } from './course-page-view/course-page-view-teacher/course-page-view-teacher.component';
import { CoursePageViewStudentComponent } from './course-page-view/course-page-view-student/course-page-view-student.component';
import { ProfileComponent } from './profile/profile.component';
import { EnrolledCoursesComponent } from './course-page-view/course-page-view-student/enrolled-courses/enrolled-courses.component';
import { DetailsEnrolledCourseComponent } from './course-page-view/course-page-view-student/details-enrolled-course/details-enrolled-course.component';
import { CoursePageTeacherListComponent } from './course-page-view/course-page-view-teacher/course-page-teacher-list/course-page-teacher-list.component';

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
    StudentUpdateComponent,
    StudentDeleteComponent,
    SetProctorComponent,
    CoursesComponent,
    StudentCoursesComponent,
    TeacherCoursesComponent,
    StudentCoursePageComponent,
    StudentCourseDetailsComponent,
    StudentCourseListComponent,
    RegisterComponent,
    RegisterStudentComponent,
    RegisterTeacherComponent,
    ListComponent,
    EnrollComponent,
    RegisterStudentDetailsComponent,
    TeachingListComponent,
    TeachingEnrollComponent,
    TeachercrudComponent,
    TeacherlistComponent,
    TeacheraddComponent,
    TeacherdetailsComponent,
    TeacherupdateComponent,
    TeacherdeleteComponent,
    TeacherupdatebyidComponent,
    SchoolcrudComponent,
    SchoollistComponent,
    SchooldetailsComponent,
    SchooladdComponent,
    SchoolteacherlisthodComponent,
    SchoolteacherlistdeanComponent,
    SchooldeleteComponent,
    LogoutComponent,
    CoursePageViewComponent,
    CoursePageViewTeacherComponent,
    CoursePageViewStudentComponent,
    ProfileComponent,
    EnrolledCoursesComponent,
    DetailsEnrolledCourseComponent,
    CoursePageTeacherListComponent,
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
