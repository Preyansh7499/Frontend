import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private teacherService : TeacherService, private schoolService:SchoolService, private fb:FormBuilder ) {
    schoolService.getSchools().subscribe(
      (res)=>{this.schools = res; console.log(res);},
      (err)=>{alert("Fetching School caused an error");console.log(err);}
    );
   }

  ngOnInit(): void {
    this.teacherAddForm = this.fb.group({
      name: ["",Validators.required],
      emailid:["",Validators.required],
      schoolId:["",Validators.required],
      designationId:["",Validators.required],
      password:["",Validators.required],
      confirmPassword:["",Validators.required] 
    }
    );

  }
  
  onSubmit(data){
    data.password = this.HashPassword(data.password);
    let User = {
      name: data.name,
      schoolid: data.schoolId,
      imagePath : null,
      password: data.password,
      emailid: data.emailid,
      designationid: data.designationId
    }
    this.teacherService.addTeacher(User).subscribe(
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
