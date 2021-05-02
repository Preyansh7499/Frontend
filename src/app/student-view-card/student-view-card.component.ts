import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-view-card',
  templateUrl: './student-view-card.component.html',
  styleUrls: ['./student-view-card.component.css']
})
export class StudentViewCardComponent implements OnInit {

  constructor() { }
  @Input()
  student:any;

  ngOnInit(): void {
  }
}
