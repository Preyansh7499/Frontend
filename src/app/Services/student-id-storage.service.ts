import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentIdStorageService {

  public studentId: BehaviorSubject<number> = new BehaviorSubject<number>(1);


  constructor() { }
}
