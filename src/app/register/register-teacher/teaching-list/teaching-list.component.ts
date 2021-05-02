import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/Services/courses.service';
import { TeacherRegisterService } from 'src/app/Services/teacher-register.service';

@Component({
  selector: 'app-teaching-list',
  templateUrl: './teaching-list.component.html',
  styleUrls: ['./teaching-list.component.css']
})
export class TeachingListComponent implements OnInit {


  tid:any;
  teacherCourses:any;

  constructor(ar:ActivatedRoute,private teacherRegister:TeacherRegisterService) {
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
  unenroll(sid,regid)
  {
    let res = confirm("Are you sure you want to Unernroll the student from the course");
    if(res == true){
      alert("not yet implemented");
    }
  }

}
