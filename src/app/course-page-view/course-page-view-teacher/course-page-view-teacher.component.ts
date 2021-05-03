import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/Services/teacher.service';

@Component({
  selector: 'app-course-page-view-teacher',
  templateUrl: './course-page-view-teacher.component.html',
  styleUrls: ['./course-page-view-teacher.component.css']
})
export class CoursePageViewTeacherComponent implements OnInit {

  teacherIdForm:any;
  teacher:any;
  tid:any;
  show:boolean;

  constructor(private router:Router,private teacherService:TeacherService) { }
  
  ngOnInit(): void {
    this.teacherIdForm = new FormGroup({
      teacherId:new FormControl()
    });
  }
  refresh(){
    this.show = true;
  }
  onSubmitId(data){
    this.teacherService.getTeacherById(data.teacherId).subscribe(
      (res)=>{    
        this.teacher = res;
        this.tid = data.teacherId;
        this.show = false;
      },
      (err)=> {
        alert("Please select a valid Id");
        console.log(err);
        this.tid = 0;
      }
    )
  
  }


}
