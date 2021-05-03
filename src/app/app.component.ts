import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
  user:any;

  constructor(private authService:AuthService) {
    
  }
  getUserId(){
    let myUserId = localStorage.getItem("userId");
    return myUserId;
  }
  isAdmin(){
    let str = localStorage.getItem("userType");

    if(str == "admin")
      return true;
    return false;
  }

  isTeacher(){
    let str = localStorage.getItem("userType");

    if(str == "teacher")
      return true;
    return false;
  }
  isStudent(){
    let str = localStorage.getItem("userType");

    if(str == "student")
      return true;
    return false;
  }
  

get isLoggedin(){
  return this.authService.isLoggedin();
}
}
