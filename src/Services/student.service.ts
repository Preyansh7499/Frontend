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
}
