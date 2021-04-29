import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/Services/student.service';


@Component({
  selector: 'student-view',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentViewComponent implements OnInit {

  students:any;
  constructor(private studentService:StudentService) { 

  }

  ngOnInit(): void {
  }
  

}
