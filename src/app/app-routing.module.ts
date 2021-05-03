import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './login/admin/admin.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './login/student/student.component';
import { TeacherComponent } from './login/teacher/teacher.component';

import {StudentViewComponent} from './student/student.component';
import {StudentAddComponent} from './student/student-add/student-add.component';
import {StudentDetailsComponent} from './student/student-details/student-details.component';
import {StudentListComponent} from './student/student-list/student-list.component';
import { StudentUpdateComponent } from './student/student-update/student-update.component';
import { StudentDeleteComponent } from './student/student-delete/student-delete.component';
import { SetProctorComponent } from './student/set-proctor/set-proctor.component';
import { CoursesComponent } from './courses/courses.component';
import { StudentCoursesComponent } from './courses/student-courses/student-courses.component';
import { TeacherCoursesComponent } from './courses/teacher-courses/teacher-courses.component';
import { StudentCoursePageComponent } from './courses/student-course-page/student-course-page.component';
import { StudentCourseDetailsComponent } from './courses/student-course-page/student-course-details/student-course-details.component';
import { RegisterComponent } from './register/register.component';
import { RegisterStudentComponent } from './register/register-student/register-student.component';
import { RegisterTeacherComponent } from './register/register-teacher/register-teacher.component';
import { ListComponent } from './register/register-student/list/list.component';
import { EnrollComponent } from './register/register-student/enroll/enroll.component';
import { RegisterStudentDetailsComponent } from './register/register-student/register-student-details/register-student-details.component';
import { TeachingEnrollComponent } from './register/register-teacher/teaching-enroll/teaching-enroll.component';
import { TeachingListComponent } from './register/register-teacher/teaching-list/teaching-list.component';

import { TeachercrudComponent } from './teachercrud/teachercrud.component';
import { TeacherlistComponent } from './teachercrud/teacherlist/teacherlist.component';
import { TeacheraddComponent } from './teachercrud/teacheradd/teacheradd.component';
import { TeacherdetailsComponent } from './teachercrud/teacherdetails/teacherdetails.component';
import { TeacherupdateComponent } from './teachercrud/teacherupdate/teacherupdate.component';
import { TeacherdeleteComponent } from './teachercrud/teacherdelete/teacherdelete.component';
import { TeacherupdatebyidComponent } from './teachercrud/teacherupdatebyid/teacherupdatebyid.component';

import { SchoolcrudComponent } from './schoolcrud/schoolcrud.component';
import { SchooldetailsComponent } from './schoolcrud/schooldetails/schooldetails.component';
import { SchoollistComponent } from './schoolcrud/schoollist/schoollist.component';
import { SchooladdComponent } from './schoolcrud/schooladd/schooladd.component';
import { SchoolteacherlisthodComponent } from './schoolcrud/schoolteacherlisthod/schoolteacherlisthod.component';
import { SchoolteacherlistdeanComponent } from './schoolcrud/schoolteacherlistdean/schoolteacherlistdean.component';
import { SchooldeleteComponent } from './schoolcrud/schooldelete/schooldelete.component';
import { AuthGuard } from './auth/auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { CoursePageViewComponent } from './course-page-view/course-page-view.component';
import { CoursePageViewStudentComponent } from './course-page-view/course-page-view-student/course-page-view-student.component';
import { CoursePageViewTeacherComponent } from './course-page-view/course-page-view-teacher/course-page-view-teacher.component';
import { ProfileComponent } from './profile/profile.component';
import { EnrolledCoursesComponent } from './course-page-view/course-page-view-student/enrolled-courses/enrolled-courses.component';
import { DetailsEnrolledCourseComponent } from './course-page-view/course-page-view-student/details-enrolled-course/details-enrolled-course.component';
import { CoursePageTeacherListComponent } from './course-page-view/course-page-view-teacher/course-page-teacher-list/course-page-teacher-list.component';

const routes: Routes = [
  {path:'login', component:LoginComponent,
  children:[
    {path :'admin', component:AdminComponent},
    {path :'student', component:StudentComponent},
    {path :'teacher', component:TeacherComponent}
  ]
  },
  {path : 'home', component:HomeComponent},
  {path : 'logout', component: LogoutComponent},
  { 
    path:'Students',component:StudentViewComponent,
    children:
    [
      {path :'List',component:StudentListComponent},
      {path :'Details/:id',component:StudentDetailsComponent},
      {path: 'Add',component:StudentAddComponent},
      {path: 'Update',component:StudentUpdateComponent},
      {path: 'Update/:id',component:StudentUpdateComponent},
      {path:'Delete',component:StudentDeleteComponent},
      {path:'Delete/:id',component:StudentDeleteComponent},
      {path:'Proctor',component:SetProctorComponent},
      {path:'Proctor/:id',component:SetProctorComponent}
    ]
  },
  {
    path:'Register',component:RegisterComponent,
    children:
    [
      {path:'Student',component:RegisterStudentComponent,children:[
        {path:'list/:id',component:ListComponent},
        {path:'enroll/:id',component:EnrollComponent},
        {path:'StudentDetails',component:RegisterStudentDetailsComponent},
        {path:'',redirectTo:'StudentDetails',pathMatch:'full'}
      ]},

      {path:'Teacher',component:RegisterTeacherComponent,children:
        [
          {path:'list/:id',component:TeachingListComponent},
          {path:'enroll/:id',component:TeachingEnrollComponent},
        ]
      }
    ]
  },
  {
    path:'CoursePage',component:CoursePageViewComponent,children:[
      {path:'Student',component:CoursePageViewStudentComponent,children:[
        {path:"EnrolledCourses/:id",component:EnrolledCoursesComponent},
        {path:"Details/:regid",component:DetailsEnrolledCourseComponent}
      ]},
      {path:'Teacher',component:CoursePageViewTeacherComponent,children:[
        {path:"EnrolledList/:id",component:CoursePageTeacherListComponent}
      ]}
    ]
  },
  {
    path:'Profile',component:ProfileComponent
  },
  {path:'teachercrud', component:TeachercrudComponent,
  canActivate:[AuthGuard],
  children:[
    {path:'teacherlist', component:TeacherlistComponent},
    {path:'teacheradd', component: TeacheraddComponent},
    {path:'teacherdetails/:id', component:TeacherdetailsComponent},
    {path:'teacherupdate', component:TeacherupdateComponent},
    {path:'teacherdelete', component:TeacherdeleteComponent},
    {path:'teacherupdatebyid/:id',component:TeacherupdatebyidComponent}
  ]
  },
  
  {path:'schoolcrud', component:SchoolcrudComponent,
   children:[
    {path:'schoollist', component:SchoollistComponent},
    {path:'schooldetails/:id', component:SchooldetailsComponent},
    {path:'schooladd', component:SchooladdComponent},
    {path:'schoolteacherlisthod', component: SchoolteacherlisthodComponent},
    {path:'schoolteacherlistdean', component: SchoolteacherlistdeanComponent},
    {path:'schooldelete', component: SchooldeleteComponent}
  ]},
  {
    path:'Courses',component:CoursesComponent,
    children:
    [
      {
        path:"Student",component:StudentCoursesComponent,
        children:
        [
          {
            path:"CoursePage/:id",component:StudentCoursePageComponent,
            children:
            [
              {path:"Details/:regid",component:StudentCourseDetailsComponent}
            ]
          }
        ]
      },
      {path:"Teacher",component:TeacherCoursesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
