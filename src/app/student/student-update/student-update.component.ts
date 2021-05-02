import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DegreeService } from 'src/app/Services/degree.service';
import { SchoolService } from 'src/app/Services/school.service';
import { StudentService } from 'src/app/Services/student.service';

import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {

  student:any;
  studentIdForm:FormGroup;
  schools:any;
  degrees:any;
  studentUpdateForm:FormGroup;


  constructor(ar:ActivatedRoute,private studentService:StudentService,private schoolService:SchoolService,private degreeService:DegreeService) { 
    this.submitIdIfInRoute(ar);
    schoolService.getSchools().subscribe(
      (res)=>{this.schools = res;},
      (err)=>{alert("Fetching School caused an error");console.log(err);}
    );

    degreeService.getDegrees().subscribe(
      (res)=>{this.degrees =res;},
      (err)=> {alert("Error occured while fetching Degrees");console.log(err);}
    );
  }

  ngOnInit(): void {
    this.studentIdForm = new FormGroup({
      studentId:new FormControl()
    });
    
    this.studentUpdateForm = new FormGroup({
      name:new FormControl(),
      yearOfJoining:new FormControl(),
      dateOfBirth:new FormControl(),
      password:new FormControl(),
      degreeId:new FormControl(),
      schoolId:new FormControl(),
      emailid:new FormControl()      
    });
  }
  submitIdIfInRoute(ar){
    if (typeof ar.snapshot.params.id !== 'undefined')
    {
      let sid = parseInt(ar.snapshot.params.id);
      this.onSubmitId({studentId:sid});
    }
  }

  onSubmitId(data){
    this.studentService.getStudentById(data.studentId).subscribe(
      (res)=>{    
        this.student = res;
        let studentPatch = this.ParseStudentFromApi(this.student);
        this.studentUpdateForm.patchValue(studentPatch);
      },
      (err)=> {
        alert("Please select a valid Id");
        console.log(err);
      }
    )
  
  }
  ParseStudentFromApi(student){
    let parsedStudent = {
      name:student.name,
      yearOfJoining:student.yearOfJoining,
      dateOfBirth:student.dateOfBirth.substring(0,10),
      degreeId:student.degree.degreeId,
      schoolId:student.school.schoolId,
      emailid:student.emailid
    }
    return parsedStudent;
  }
 
  onSubmitUpdate(data){
    let updateStudent = data;
    updateStudent.password = this.HashPassword(data.password);
    let sid = this.studentIdForm.value.studentId;
    updateStudent.studentId = sid;
    console.log(this.student.proctorId);
    updateStudent.proctorId = this.student.proctorId;
    console.log(updateStudent);
    this.studentService.updateStudent(sid,updateStudent).subscribe(
      (res)=>{alert("Student updated");this.studentUpdateForm.reset();},
      (err)=>{alert("An error occured"); console.log(err);}
    )

  }
  HashPassword(pass:string){
    const md5 = new Md5();
    return md5.appendStr(pass).end();
  }
}
