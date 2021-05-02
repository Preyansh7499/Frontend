import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/Services/courses.service';
import { TeacherRegisterService } from 'src/app/Services/teacher-register.service';

@Component({
  selector: 'app-teaching-enroll',
  templateUrl: './teaching-enroll.component.html',
  styleUrls: ['./teaching-enroll.component.css']
})
export class TeachingEnrollComponent implements OnInit {
  tid:any;
  courses:any;
  constructor(ar:ActivatedRoute,private courseService:CoursesService,private teacherRegister:TeacherRegisterService) {
    this.tid=ar.snapshot.params.id;
    courseService.getCourses().subscribe(
      (res)=>{this.courses = res;console.log(res);},
      (err)=>{alert("An error occured while fetching Courses");console.log(err);}
    )
   }

  ngOnInit(): void {
  }

  register(cid){
    this.teacherRegister.registerTeacher(this.tid,cid).subscribe(
      (res)=>{alert("registered");},
      (err)=>{alert("Error occured");}
    )
  }
}
