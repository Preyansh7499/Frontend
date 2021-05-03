import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TeacherService } from 'src/app/Services/teacher.service';
import { SchoolService } from 'src/app/Services/school.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-teacheradd',
  templateUrl: './teacheradd.component.html',
  styleUrls: ['./teacheradd.component.css']
})
export class TeacheraddComponent implements OnInit {
  teacherAddForm : FormGroup;
  schools :any;

  constructor(private teacherService : TeacherService, private schoolService:SchoolService ) {
    schoolService.getSchools().subscribe(
      (res)=>{this.schools = res; console.log(res);},
      (err)=>{alert("Fetching School caused an error");console.log(err);}
    );
   }

  ngOnInit(): void {
    this.teacherAddForm = new FormGroup({
      name: new FormControl(),
      password: new FormControl(),
      emailid: new FormControl(),
      schoolid: new FormControl(),
      designationid: new FormControl()    
    })
  }
  
  onSubmit(data){
    data.password = this.HashPassword(data.password);
    this.teacherService.addTeacher(data).subscribe(
      (t:any) => {
        alert("teacher added")
      },
      err => {
        alert("error occured");
        console.log(err);
      }
    )
  }
  HashPassword(pass:string){
    const md5 = new Md5();
    return md5.appendStr(pass).end();
  }
  

}
