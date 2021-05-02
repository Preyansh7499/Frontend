import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url:string = "http://localhost:36820/api/Students"
  constructor(private http:HttpClient) { }
  getStudents(){
    return this.http.get(this.url);
  }
  getStudentById(id){
    return this.http.get(this.url+"/"+id);
  }
  addStudent(student){
    return this.http.post(this.url+"/Add",student);
  }
  updateStudent(id,student){
    return this.http.patch(this.url+"/"+id,student);
  }
  deleteStudent(id){
    return this.http.get(this.url+"/Delete/"+id);
  }
  getProctorById(id){
    return this.http.get(this.url+"/"+id+"/Proctor");
  }
  setProctorById(sid,tid){
    return this.http.get(this.url+"/"+sid+"/Proctor/"+tid);
  }
}
