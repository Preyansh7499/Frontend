import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../Services/school.service';
import { TeacherService } from '../Services/teacher.service';

@Component({
  selector: 'app-profile-teacher',
  templateUrl: './profile-teacher.component.html',
  styleUrls: ['./profile-teacher.component.css']
})
export class ProfileTeacherComponent implements OnInit {

  teacher:any;
  teacherSchool:any;
  teacherDesignation:any;

  teacherId:any;

  constructor(private teacherService:TeacherService,private schoolService:SchoolService) {
    this.teacherId = localStorage.getItem("userId");
    teacherService.getTeacherById(this.teacherId).subscribe(
      (res)=>this.teacher = res,
      (err)=>{alert("Error occured while fetching teacher details");console.log(err);}
    );
    schoolService.getSchools().subscribe(
      (res:any)=>{
        console.log(res);
        console.log(this.teacher);
        this.teacherSchool = res.find(school => school.schoolId == this.teacher.schoolId);
        console.log(this.teacherSchool);
      },
      (err)=>{alert("Error occured while fetching school details");console.log(err);}
    )
  }

  ngOnInit(): void {
  }

}
