import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/Services/courses.service';
import { StudentIdStorageService } from 'src/app/Services/student-id-storage.service';

@Component({
  selector: 'app-student-course-page',
  templateUrl: './student-course-page.component.html',
  styleUrls: ['./student-course-page.component.css']
})
export class StudentCoursePageComponent implements OnInit {

  

  studentsCourses:any;

  @Input()
  sid:number;

  constructor(private ar:ActivatedRoute,private coursesService:CoursesService,private studentIdStore:StudentIdStorageService) { 
    
    this.loadCourses();
  }
  loadCourses(){
    if(typeof this.sid !== "undefined"){
      this.coursesService.getCoursesByStudentId(this.sid).subscribe(
        res => {this.studentsCourses = res;console.log(this.studentsCourses);},
        err => {alert("CONSTRUCTOR An error occured while fetching courses");console.log(err);}
      )
    }
  }
  ngOnInit(): void {
   
  }
  
  ngOnChanges(changes:SimpleChange){
    this.loadCourses();    
  }

  unenroll1(sid,regid)
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
