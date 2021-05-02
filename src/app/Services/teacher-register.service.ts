import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherRegisterService {
  
  url:string = "http://localhost:36820/api/TaughtBy";

  constructor(private http:HttpClient) { }
  
  getCoursesByTeacherId(tid){
    return this.http.get(this.url+"/"+tid);
  }
  registerTeacher(tid,cid){
    return this.http.get(this.url+"/"+tid+"/Register/"+cid);
  }
}
