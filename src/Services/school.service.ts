import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  
  url:string = "http://localhost:36820/api/Schools"
  
  constructor(private http:HttpClient) { }

  getSchools(){
    return this.http.get(this.url);
  }

  getSchoolById(id:number){
    return this.http.get(this.url + "/" +  id);
  }

  addSchool(s:any){
    return this.http.post(this.url,s);
  }

  deleteSchool(id:number){
    return this.http.get(this.url + "/Delete/" + id);
  }

}
