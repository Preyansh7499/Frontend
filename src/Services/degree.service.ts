import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DegreeService {

  url:string = "http://localhost:36820/api/Degree"

  constructor(private http:HttpClient) { }

  getDegrees(){
    return this.http.get(this.url);
  }
}
