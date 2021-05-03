import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginStatusService } from 'src/app/Services/login-status.service';
import { LoginService } from 'src/app/Services/login.service';

import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  Id : number;
  HashPassword : any;
  Type : string = "student";
  Status : any;

  constructor(private myLoginApi : LoginService, private myLoginStatus : LoginStatusService, private router : Router) { }

  ngOnInit(): void {
  }

  onSubmitStudent(data:any){
    console.log(data);
    this.Id = data.Id;
    this.HashPassword = data.HashPassword;

    const md5 = new Md5();
    let pass = this.HashPassword;
    let passhash = md5.appendStr(pass).end();
    console.log(pass,passhash);

    this.HashPassword = passhash;

    let User = {
      Id : this.Id,
      HashPassword : this.HashPassword,
      Type : this.Type
    };

    console.log(User);

    this.myLoginApi.checkPassword(User).subscribe(
      (s:any) => {
        console.log(s);
        if(s.loggedIn)
        {
          localStorage.setItem('isLoggedin','true');
          localStorage.setItem("userId",s.user.id);
          localStorage.setItem("userType",s.user.type);
          this.router.navigate(['/home']);
          
        }
        else{
          alert("Not correct pair of user id and password");
        }

      }
    )
  }

}
