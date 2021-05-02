import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-course-details',
  templateUrl: './student-course-details.component.html',
  styleUrls: ['./student-course-details.component.css']
})
export class StudentCourseDetailsComponent implements OnInit {
  regId:number;

  constructor(ar:ActivatedRoute) 
  {
    this.regId = ar.snapshot.params.regid;
  }

  ngOnInit(): void {
  }

}
