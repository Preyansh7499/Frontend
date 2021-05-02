import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/Services/login.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  Id : number;
  HashPassword : any;
  Type : string = "admin";

  constructor(private router : Router, private myLoginApi:LoginService) { }

  ngOnInit(): void {
  }
  onSubmitAdmin(data:any){
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
        if(s.loggedIn == true)
        {     
            console.log("Success");
            alert("Logged in Successfully");
            localStorage.setItem('isLoggedin', 'true');
            this.router.navigate(['/homeafterlogin']);
        }
        else{
          localStorage.setItem('isLoggedin', 'false');
          alert("Log in Failed");
        }
      }
    )
    

  }
}
