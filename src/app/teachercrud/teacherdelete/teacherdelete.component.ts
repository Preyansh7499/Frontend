import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TeacherService } from 'src/Services/teacher.service';

@Component({
  selector: 'app-teacherdelete',
  templateUrl: './teacherdelete.component.html',
  styleUrls: ['./teacherdelete.component.css']
})
export class TeacherdeleteComponent implements OnInit {
  teacherDeleteForm : FormGroup;
  teacherGetByIdForm : FormGroup;
  Tid :any;


  constructor(private teacherService : TeacherService) { }

  ngOnInit(): void {
    this.teacherGetByIdForm = new FormGroup({
      tid: new FormControl()
    })

    this.teacherDeleteForm = new FormGroup({
      
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
        console.log(e);        
        this.teacherDeleteForm.patchValue(
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
   
    this.teacherService.deleteTeacher(this.Tid).subscribe(
      (e : any) => {
        console.log(e);
        alert("Deleted");
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
    this.teacherDeleteForm.patchValue(
      {
        name : null,
        emailid : null,
        schoolid :null,
        designationid : null
      }
    )

    
  }

}
