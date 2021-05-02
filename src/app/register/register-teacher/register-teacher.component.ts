import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';
import { TeacherService } from 'src/app/Services/teacher.service';

@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.component.html',
  styleUrls: ['./register-teacher.component.css']
})
export class RegisterTeacherComponent implements OnInit {
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
