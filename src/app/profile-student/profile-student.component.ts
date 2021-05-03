import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../Services/student.service';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.css']
})
export class ProfileStudentComponent {

  studentId:number;
  student:any;
  
  constructor(private studentService:StudentService,private router: Router) { 
    this.studentId = parseInt(localStorage.getItem("userId"));
    this.studentService.getStudentById(this.studentId).subscribe(
      (res)=>{this.student = res;console.log(this.student);}
    )
  }

}
