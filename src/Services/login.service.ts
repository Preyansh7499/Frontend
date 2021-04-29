import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginObj : any;

  constructor(private http: HttpClient) {}

  checkPassword(s:any){
    this.loginObj  =   this.http.post('http://localhost:36820/api/login/',s);
    return this.loginObj;
  }
  
}
