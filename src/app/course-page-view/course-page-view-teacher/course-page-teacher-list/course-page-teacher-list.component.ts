import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherRegisterService } from 'src/app/Services/teacher-register.service';

@Component({
  selector: 'app-course-page-teacher-list',
  templateUrl: './course-page-teacher-list.component.html',
  styleUrls: ['./course-page-teacher-list.component.css']
})
export class CoursePageTeacherListComponent implements OnInit {


  tid:any;
  teacherCourses:any;

  constructor(ar:ActivatedRoute,private teacherRegister:TeacherRegisterService, private router : Router) {
    this.tid = ar.snapshot.params.id;
    this.loadCourses();
   }

  ngOnInit(): void {
  }
  loadCourses(){
    if(typeof this.tid !== "undefined"){
      this.teacherRegister.getCoursesByTeacherId(this.tid).subscribe(
        res => {this.teacherCourses = res;console.log(this.teacherCourses);},
        err => {alert("CONSTRUCTOR An error occured while fetching courses");console.log(err);}
      )
    }
  }
}
