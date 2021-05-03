import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailsService {

  constructor(private http:HttpClient) { }
  getMarks(regid){
    let baseUrl:string = "http://localhost:36820/api/Registered/";
    let marksUrl:string = baseUrl+regid+"/Marks";
    return this.http.get(marksUrl);
  }
  getAttendance(regid){
    let baseUrl:string = "http://localhost:36820/api/Attendance/"; 
    let attendanceUrl:string = baseUrl+regid;
    return this.http.get(attendanceUrl);
  }
  updateMarks(regid : any, mark : any){
    let baseUrl:string = "http://localhost:36820/api/Registered/";
    let marksUrl:string = baseUrl+regid+"/Marks";
    return this.http.put(marksUrl, mark);
  }
  addMarks(regid : any, mark : any){
    let baseUrl:string = "http://localhost:36820/api/Registered/";
    let marksUrl:string = baseUrl+regid+"/Marks";
    return this.http.post(marksUrl, mark);
  }
}
