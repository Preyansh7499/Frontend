import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/Services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students:any;
  constructor(private studentService:StudentService) {     
    studentService.getStudents().subscribe(
    res =>{this.students=res;console.log(res); } ,
    err=>{alert("error occured");console.log(err);}
    );}

  ngOnInit(): void {
  }

}
