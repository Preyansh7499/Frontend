import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-view-card',
  templateUrl: './teacher-view-card.component.html',
  styleUrls: ['./teacher-view-card.component.css']
})
export class TeacherViewCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  teacher:any;
}
