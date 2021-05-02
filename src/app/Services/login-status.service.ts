import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginStatusService {
    loginstatusStudent : boolean = false;
    loginstatusTeacher : boolean = false;

  constructor(private http : HttpClient) { }

  checkStatusStudent(s:any){
    if(s == true)
    {
      console.log("If Success");
        this.loginstatusStudent = true;
        return this.loginstatusStudent;
    }
    else
    {
      console.log("if Fail")
      this.loginstatusStudent = false;
      return this.loginstatusStudent;
    }
  }
  returnStudentStatus()
  {
    return this.loginstatusStudent;
  }

  checkStatusteacher(s:any){
    if(s == true)
    {
      console.log("If Success");
        this.loginstatusTeacher = true;
        return this.loginstatusTeacher;
    }
    else
    {
      console.log("if Fail")
      this.loginstatusStudent = false;
      return this.loginstatusStudent;
    }
  }
  returnTeacherStatus()
  {
    return this.loginstatusTeacher;
  }

}
