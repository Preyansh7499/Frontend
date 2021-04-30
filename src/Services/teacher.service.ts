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

  getTeacherById(id:number){
    return this.http.get(this.url + "/" +  id);
  }

  addTeacher(teacher){
    return this.http.post(this.url,teacher);
  }

  updateTeacher(id:number,s :any){
    return this.http.put(this.url + "/" +id ,s);
  }

  deleteTeacher(id : number){
    return this.http.get(this.url + "/delete/" + id);
  }

}
