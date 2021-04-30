import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from 'src/Services/teacher.service';

@Component({
  selector: 'app-teacherupdatebyid',
  templateUrl: './teacherupdatebyid.component.html',
  styleUrls: ['./teacherupdatebyid.component.css']
})
export class TeacherupdatebyidComponent implements OnInit {
  teacherUpdateForm : FormGroup;
  Tid:any;
  teacher : any;
  Tname : string;
  Tpassword :string;
  Temailid : string;
  Tschoolid : number;
  Tdesignationid : number;
  RegNo : any;
  imagepath : string;
  password : string;

  constructor(private teacherService : TeacherService, private router : Router, ar :ActivatedRoute) {
    this.Tid = ar.snapshot.params['id'];
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

  ngOnInit(): void {
    this.teacherUpdateForm = new FormGroup({
      name: new FormControl,
      emailid: new FormControl(),
      schoolid: new FormControl(),
      designationid: new FormControl()    
    })
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

  delete(){
    console.log("start" + this.Tid);
    this.teacherService.deleteTeacher(this.Tid).subscribe(
      (e : any) => {
        console.log("mid-1");
        console.log(e);
        alert("Deleted");
        this.router.navigate(['/teachercrud/teacherlist/'])
      },
      err => {
        console.log("mid-2");
        alert("error occured");
        console.log(err);
      }
    )
   console.log("end");
  }

  back(){
    this.router.navigate(['/teachercrud/teacherlist/'])
  }

}
