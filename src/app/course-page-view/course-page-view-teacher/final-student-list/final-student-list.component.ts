import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-final-student-list',
  templateUrl: './final-student-list.component.html',
  styleUrls: ['./final-student-list.component.css']
})
export class FinalStudentListComponent implements OnInit {
  tbyid : any;
  studentlist : any;

  constructor(private router : Router, private courseService : CoursesService, ar : ActivatedRoute) {
    this.tbyid = ar.snapshot.params.id;
    this.loadstudents();
   }

  ngOnInit(): void {
  }

  loadstudents(){
    this.courseService.GetStudentByTaughtId(this.tbyid).subscribe(
      (res : any) => {
        this.studentlist = res;
        console.log(this.studentlist);
      },
      err => {
        alert("CONSTRUCTOR An error occured while fetching courses");
        console.log(err);
      }
    )
  }
}
