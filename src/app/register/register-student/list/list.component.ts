import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  sid:any;
  studentsCourses:any;

  constructor(ar:ActivatedRoute,private coursesService:CoursesService) {
    this.sid = ar.snapshot.params.id;
    this.loadCourses();
   }

  ngOnInit(): void {
  }
  loadCourses(){
    if(typeof this.sid !== "undefined"){
      this.coursesService.getCoursesByStudentId(this.sid).subscribe(
        res => {this.studentsCourses = res;console.log(this.studentsCourses);},
        err => {alert("CONSTRUCTOR An error occured while fetching courses");console.log(err);}
      )
    }
  }
  unenroll(sid,regid)
  {
    let res = confirm("Are you sure you want to Unernroll the student from the course");
    if(res == true){
      this.coursesService.unenrollCourse(sid,regid).subscribe(
        (res)=>{alert("Student Unenrolled");this.loadCourses();console.log(res);},
        (err)=>{alert("error Course couldnt be Unenrolled");console.log(err);}
      );       
    }
  }

}
