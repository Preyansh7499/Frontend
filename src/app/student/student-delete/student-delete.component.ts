import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {

  deleteStudent:any;
  studentIdForm:FormGroup;
  sid:number;
  constructor(ar:ActivatedRoute,private studentService:StudentService) { 
    this.submitIdIfInRoute(ar);    
    this.studentIdForm = new FormGroup({
      studentId:new FormControl()
    });
  }
  
  submitIdIfInRoute(ar){
    if (typeof ar.snapshot.params.id !== 'undefined')
    {
      let sid = parseInt(ar.snapshot.params.id);
      this.onSubmitId({studentId:sid});
    }
  }

  ngOnInit(): void {
  }
  onSubmitId(formdata){
    this.sid = formdata.studentId;
    this.studentService.getStudentById(this.sid).subscribe(
      (res)=>{this.deleteStudent = res;},
      (err)=>{alert("select a valid id");}
    );
  }
  deleteStudentbyId(){
    this.studentService.deleteStudent(this.sid).subscribe(
      (res)=>{
        alert("Student Deleted");
        this.sid=null;
        this.deleteStudent =null;
      },
      (err)=>{
        alert("Error occured while deleting");
        console.log(err);

      }
    )
  }
  
}
