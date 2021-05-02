import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SchoolService } from 'src/Services/school.service';

@Component({
  selector: 'app-schooldelete',
  templateUrl: './schooldelete.component.html',
  styleUrls: ['./schooldelete.component.css']
})
export class SchooldeleteComponent implements OnInit {
  schoolDeleteForm : FormGroup;
  schoolGetByIdForm : FormGroup;
  Sid : any;
  school :any;


  constructor(private schoolService : SchoolService) { }

  ngOnInit(): void {
    this.schoolGetByIdForm = new FormGroup({
      sid: new FormControl()
    })
    this.schoolDeleteForm = new FormGroup({
      sname : new FormControl(),
      bname : new FormControl(),
      hname : new FormControl(),
      dname : new FormControl()
    })
  }

  onSubmitId(data){
    console.log(data.sid);
    this.Sid = data.sid;
    
    this.schoolService.getSchoolById(this.Sid).subscribe(
      (e : any) => {
        console.log(e);
        this.school = e;        
        this.schoolDeleteForm.patchValue(
          {
            sname : e.schoolName,
            bname : e.buildingName,
            hname : e.hod.name,
            dname : e.dean.name,
            
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
    console.log(this.Sid);
    console.log(data);
   
    this.schoolService.deleteSchool(this.Sid).subscribe(
      (e : any) => {
        console.log(e);
        alert("Deleted");
      },
      err => {
        alert("error occured");
        console.log(err);
      }
    )
    this.schoolGetByIdForm.patchValue(
      {
        sid : null
      }
    )
    this.schoolDeleteForm.patchValue(
      {
            sname : null,
            bname : null,
            hname : null,
            dname : null
      }
    )
    this.school = null;
  }

}
