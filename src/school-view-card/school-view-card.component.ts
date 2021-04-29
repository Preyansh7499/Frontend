import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-school-view-card',
  templateUrl: './school-view-card.component.html',
  styleUrls: ['./school-view-card.component.css']
})
export class SchoolViewCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  school:any;
}
