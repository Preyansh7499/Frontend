import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {

  sid:any;
  courses:any;
  taughtBy:any;
  EnrollCourseForm:FormGroup;
  op:any;

  constructor(ar:ActivatedRoute,private courseService:CoursesService) {
    this.sid = ar.snapshot.params.id;
    
    courseService.getCourses().subscribe(
      (res)=>{this.courses = res; console.log(res);},
      (err)=>{alert("Error occured while fetching courses");console.log(err);}
    );

    this.EnrollCourseForm = new FormGroup(
      {
        courseId : new FormControl(),
        taughtById:new FormControl()
      });
  }
  loadTeachers(){
    let cid = this.EnrollCourseForm.get('courseId').value;
    
    this.courseService.getTeachersByCourseId(cid).subscribe(
      (res)=>{this.taughtBy = res;console.log(res);},
      (err)=>alert("select a course first")
      
    );
  }
  ngOnInit(): void {
  }
  onSubmit(data){
    console.log(data);
    let courseId = data.courseId;
    let taughtById = data.taughtById;

    this.courseService.enrollCourses(this.sid,taughtById).subscribe(
      (res)=>{this.op=res; alert(this.op.message);},
      (err)=>{alert("error occured");console.log(err);}
    )
  }
}
