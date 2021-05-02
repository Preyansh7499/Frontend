import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/Services/teacher.service';

@Component({
  selector: 'app-teacherlist',
  templateUrl: './teacherlist.component.html',
  styleUrls: ['./teacherlist.component.css']
})
export class TeacherlistComponent implements OnInit {
  teachers : any;

  constructor(private teacherService : TeacherService) {
    teacherService.getTeachers().subscribe(
      (t : any) => {
        this.teachers = t;
        console.log(this.teachers);
      },
      err => {
        alert("error occured");
        console.log(err);
      }
    )
   }

  ngOnInit(): void {
  }

}
