import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginStatusService } from 'src/Services/login-status.service';

@Component({
  selector: 'app-home-after-login',
  templateUrl: './home-after-login.component.html',
  styleUrls: ['./home-after-login.component.css']
})
export class HomeAfterLoginComponent implements OnInit {
  StudentStatus : boolean = false;
  TeacherStatus : boolean = false;

  constructor(private myLoginStatus : LoginStatusService, private router : Router) {
    this.StudentStatus = this.myLoginStatus.returnStudentStatus();
    this.TeacherStatus = this.myLoginStatus.returnTeacherStatus();
    console.log(this.TeacherStatus);
   }

  ngOnInit(): void {
  }

  Logout(){
    localStorage.setItem('isLoggedin', 'false');
    this.router.navigate(['/Home'])

  }

}
