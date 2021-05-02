import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';
import { TeacherService } from 'src/app/Services/teacher.service';

@Component({
  selector: 'app-set-proctor',
  templateUrl: './set-proctor.component.html',
  styleUrls: ['./set-proctor.component.css']
})
export class SetProctorComponent implements OnInit {

  student:any;
  studentIdForm:FormGroup;
  sid:number=0;
  proctor:any;
  teacherList:any;

  constructor(ar:ActivatedRoute,private studentService:StudentService,private teacherService:TeacherService) {   

    this.submitIdIfInRoute(ar);

    this.studentIdForm = new FormGroup({
      studentId:new FormControl(this.sid)
    });

    
    
  }

  submitIdIfInRoute(ar){
    if (typeof ar.snapshot.params.id !== 'undefined')
    {
      this.sid = parseInt(ar.snapshot.params.id);
      this.onSubmitId({studentId:this.sid});
    }
  }

  ngOnInit(): void {
    this.teacherService.getTeachers().subscribe(
      (res)=>{this.teacherList = res;console.log(this.teacherList)},
      (err)=>{alert("Fetching Proctors Got an error");console.log(err);}
    )
  }
  onSubmitId(formdata){
    this.sid = formdata.studentId;
    this.studentService.getStudentById(this.sid).subscribe(
      (res)=>{this.student = res;this.proctor=this.student.proctor; },
      (err)=>{alert("select a valid id");}
    );
  }
  isProctorNull(proctor):boolean{
    if(proctor == null || proctor.teacherId<=0)
      return true;
    return false;
  }
  setProctor(tid){
    this.studentService.setProctorById(this.sid,tid).subscribe(
      (res)=>{alert("proctor set");this.proctor = res;},
      (err)=>{alert("error occured while setting proctor");console.log(err);}
    )
  }

}
