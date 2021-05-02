import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { LoginStatusService } from '../Services/login-status.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  StudentStatus : boolean = false;
  TeacherStatus : boolean = false;

  constructor(private myLoginStatus : LoginStatusService) {
      this.StudentStatus = this.myLoginStatus.returnStudentStatus();
      this.TeacherStatus = this.myLoginStatus.returnTeacherStatus();
      console.log(this.TeacherStatus);
  }
   

  ngOnInit(): void {
  }
  @Output() s: EventEmitter<boolean> = new EventEmitter<boolean>();

  changestatus(){
    this.s.emit(this.StudentStatus);
  }
}
