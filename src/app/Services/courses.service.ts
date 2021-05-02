import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  registeredUrl:string = "http://localhost:36820/api/Registered";
  coursesUrl:string = "http://localhost:36820/api/Courses";
  
  constructor(private http:HttpClient) { }

  getCoursesByStudentId(sid){
    return this.http.get(this.registeredUrl+"/"+sid);
  }
  unenrollCourse(sid,regid){
    let url = this.registeredUrl+"/"+sid+"/deregister/"+regid;
    return this.http.get(url);
  }
  getCourses(){
    return this.http.get(this.coursesUrl);
  }
  getTeachersByCourseId(cid){
    return this.http.get(this.coursesUrl+"/"+cid+"/Teachers")
  }
  enrollCourses(sid,tbyid){
    let enrollUrl = this.registeredUrl+"/"+sid+"/Enroll/"+tbyid;
    return this.http.get(enrollUrl);
  }
}
