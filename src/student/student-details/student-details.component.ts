import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/Services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  studentId:number;
  student:any;
  
  constructor(ar:ActivatedRoute,private studentService:StudentService) { 
    this.studentId = parseInt(ar.snapshot.params['id']);
    this.studentService.getStudentById(this.studentId).subscribe(
      (res)=>{this.student = res;console.log(this.student);}
    )
  }

  ngOnInit(): void {
  }

}
