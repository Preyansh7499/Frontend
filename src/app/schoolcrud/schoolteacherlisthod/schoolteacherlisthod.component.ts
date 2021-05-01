import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/Services/teacher.service';

@Component({
  selector: 'app-schoolteacherlisthod',
  templateUrl: './schoolteacherlisthod.component.html',
  styleUrls: ['./schoolteacherlisthod.component.css']
})
export class SchoolteacherlisthodComponent implements OnInit {
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

  make(){
    
  }

  ngOnInit(): void {
  }

}
