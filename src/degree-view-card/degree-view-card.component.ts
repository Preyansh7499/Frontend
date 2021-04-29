import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-degree-view-card',
  templateUrl: './degree-view-card.component.html',
  styleUrls: ['./degree-view-card.component.css']
})
export class DegreeViewCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  degree:any;
}
