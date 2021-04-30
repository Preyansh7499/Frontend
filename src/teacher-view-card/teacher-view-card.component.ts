import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-view-card',
  templateUrl: './teacher-view-card.component.html',
  styleUrls: ['./teacher-view-card.component.css']
})
export class TeacherViewCardComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  teacherdetails(){
    this.router.navigate(['/teachercrud/teacherdetails/' + this.teacher.teacherId]);
  }
  
  @Input()
  teacher:any;
}
