import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  onSubmitAdmin(data:any){
    alert("clicked");
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
    

  }
}
