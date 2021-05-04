import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseDetailsService } from 'src/app/Services/course-details.service';



@Component({
  selector: 'app-details-enrolled-course',
  templateUrl: './details-enrolled-course.component.html',
  styleUrls: ['./details-enrolled-course.component.css']
})
export class DetailsEnrolledCourseComponent implements OnInit {

  regId:any;
  Marks:any;
  Attendance:any;
  MarksError:any;
  percentage:any;

  constructor(ar:ActivatedRoute,private courseDetailsService:CourseDetailsService) {
    this.regId = ar.snapshot.params.regid;
    courseDetailsService.getAttendance(this.regId).subscribe(
      (res)=>{this.Attendance = res; console.log(this.Attendance);this.percentage = this.Attendance.attendancePercentage;console.log(res);},
      (err)=>{console.log(err);}
    );
     courseDetailsService.getMarks(this.regId).subscribe(
      (res)=> this.Marks = res,
      (err)=>{
        this.MarksError = err;
        console.log("!@#@#!",this.Marks);
        if(this.MarksError.error.marksNotSet == true)
        {
          alert(this.MarksError.error.message);
        }
        else{
          alert("error: while fetching marks");
        }
      }
    )
   }

  ngOnInit(): void {
  }

}
