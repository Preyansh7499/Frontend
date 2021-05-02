import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TeacherService } from 'src/app/Services/teacher.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-teacherupdate',
  templateUrl: './teacherupdate.component.html',
  styleUrls: ['./teacherupdate.component.css']
})
export class TeacherupdateComponent implements OnInit {
  teacherUpdateForm : FormGroup;
  teacherGetByIdForm : FormGroup;
  teacher : any;
  Tid :any;
  Tname : string;
  Tpassword :string;
  Temailid : string;
  Tschoolid : number;
  Tdesignationid : number;
  RegNo : any;
  imagepath : string;
  password : string;

  constructor(private teacherService : TeacherService) { }

  ngOnInit(): void {
    this.teacherGetByIdForm = new FormGroup({
      tid: new FormControl()
    })

    this.teacherUpdateForm = new FormGroup({
      
      name: new FormControl(),
      emailid: new FormControl(),
      schoolid: new FormControl(),
      designationid: new FormControl()    
    })
  }
  onSubmitId(data){
    console.log(data.tid);
    this.Tid = data.tid;
    
    this.teacherService.getTeacherById(this.Tid).subscribe(
      (e : any) => {
        this.teacher = e;
        console.log(e);
        this.Tpassword = e.password;
        this.imagepath = e.imagePath;
        this.RegNo = e.registerNumber;
        this.teacherUpdateForm.patchValue(
          {
            name : e.name,
            emailid : e.emailid,
            schoolid : e.schoolId,
            designationid : e.designationId
          }
        )
      },
      err => {
        alert("error occured");
        console.log(err);
      }
    )
    
  }

  onSubmit(data){
    console.log(this.Tid);
    console.log(data);
    let User = {
      teacherId: this.Tid,
      registerNumber: this.RegNo,
      name: data.name,
      schoolId: data.schoolid,
      imagePath: this.imagepath,
      password: this.password,
      emailid: data.emailid,
      designationId: data.designationid
    };

    console.log(User);
    this.teacherService.updateTeacher(this.Tid, User).subscribe(
      (e : any) => {
        console.log(e);
        alert("Updated");
      },
      err => {
        alert("error occured");
        console.log(err);
      }
    )
    this.teacherGetByIdForm.patchValue(
      {
        tid : null
      }
    )
    this.teacherUpdateForm.patchValue(
      {
        name : null,
        emailid : null,
        schoolid :null,
        designationid : null
      }
    )
    this.teacher = null;

    
  }

}
