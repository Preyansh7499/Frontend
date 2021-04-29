import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  url:string = "http://localhost:36820/api/teachers"

  constructor(private http : HttpClient) { }

  getTeachers(){
    return this.http.get(this.url);
  }

  addTeacher(teacher){
    return this.http.post(this.url,teacher);
  }

}
