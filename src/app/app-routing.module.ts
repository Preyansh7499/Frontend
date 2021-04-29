import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './login/admin/admin.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './login/student/student.component';
import { TeacherComponent } from './login/teacher/teacher.component';

const routes: Routes = [
  {path:'login', component:LoginComponent,
  children:[
    {path :'admin', component:AdminComponent},
    {path :'student', component:StudentComponent},
    {path :'teacher', component:TeacherComponent}
  ]
  },
  {path : 'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
