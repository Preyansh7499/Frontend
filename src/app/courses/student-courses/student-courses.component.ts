import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentIdStorageService } from 'src/app/Services/student-id-storage.service';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-student-courses',
  templateUrl: './student-courses.component.html',
  styleUrls: ['./student-courses.component.css']
})
export class StudentCoursesComponent implements OnInit {

  studentIdForm:FormGroup;
  Student:any;
  student_id:any;
  onStudentIdChanged=new EventEmitter();

  constructor(private router:Router,ar:ActivatedRoute,private studentService:StudentService,private studentidStore:StudentIdStorageService) { 
    //this.submitIdIfInRoute(ar);    
    this.studentIdForm = new FormGroup({
      studentId:new FormControl()
    });
  }
  
  ngOnInit(): void {
  }

  onSubmitId(formdata){
    
    this.student_id = formdata.studentId;
    
    let url:string = "Courses/Student/CoursePage/"+this.student_id;
    
    this.studentService.getStudentById(this.student_id).subscribe(
      (res)=>{this.Student = res;this.router.navigateByUrl(url)},
      (err)=>{alert("select a valid id");this.Student = null;}
    );

  }

}
