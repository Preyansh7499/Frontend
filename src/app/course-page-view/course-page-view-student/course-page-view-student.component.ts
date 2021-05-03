import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-course-page-view-student',
  templateUrl: './course-page-view-student.component.html',
  styleUrls: ['./course-page-view-student.component.css']
})
export class CoursePageViewStudentComponent implements OnInit {

  studentIdForm:any;
  student:any;
  sid:any;
  show:boolean;


  constructor(private router:Router,private studentService:StudentService) { }
  
  ngOnInit(): void {
    this.studentIdForm = new FormGroup({
      studentId:new FormControl()
    });
  }
  refresh(){
    this.show = true;
  }
  onSubmitId(data){
    this.studentService.getStudentById(data.studentId).subscribe(
      (res)=>{    
        this.student = res;
        this.sid = data.studentId;
        this.show = false;
        sessionStorage.setItem("sid",this.sid);

      },
      (err)=> {
        alert("Please select a valid Id");
        console.log(err);
        this.sid = 0;
        sessionStorage.removeItem("sid");
      }
    )
  
  }

}
