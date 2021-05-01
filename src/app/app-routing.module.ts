import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './login/admin/admin.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './login/student/student.component';
import { TeacherComponent } from './login/teacher/teacher.component';

import {StudentViewComponent} from '../student/student.component';
import {StudentAddComponent} from '../student/student-add/student-add.component';
import {StudentDetailsComponent} from '../student/student-details/student-details.component';
import {StudentListComponent} from '../student/student-list/student-list.component';
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

const routes: Routes = [
  {path:'login', component:LoginComponent,
  children:[
    {path :'admin', component:AdminComponent},
    {path :'student', component:StudentComponent},
    {path :'teacher', component:TeacherComponent}
  ]
  },
  {path : 'home', component:HomeComponent},
  
  { path:'Students',component:StudentViewComponent,
  children:[
    {path :'List',component:StudentListComponent},
    {path :'Details/:id',component:StudentDetailsComponent},
    {path: 'Add',component:StudentAddComponent}
  ]
  },
  {path:'teachercrud', component:TeachercrudComponent,
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
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
