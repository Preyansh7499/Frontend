import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-student-details',
  templateUrl: './register-student-details.component.html',
  styleUrls: ['./register-student-details.component.css']
})
export class RegisterStudentDetailsComponent implements OnInit {

  student:any;

  constructor() { }

  ngOnInit(): void {
  }

}
