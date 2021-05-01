import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-school-view-card',
  templateUrl: './school-view-card.component.html',
  styleUrls: ['./school-view-card.component.css']
})
export class SchoolViewCardComponent implements OnInit {

  constructor(private router : Router) { }

  schooldetails(){
    this.router.navigate(['/schoolcrud/schooldetails/' + this.school.schoolId]);
  }

  ngOnInit(): void {
  }
  @Input()
  school:any;
}
