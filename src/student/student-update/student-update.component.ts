import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DegreeService } from 'src/Services/degree.service';
import { SchoolService } from 'src/Services/school.service';
import { StudentService } from 'src/Services/student.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {

  studentId:any;
  studentIdForm:FormGroup;
  schools:any;
  degrees:any;
  studentUpdateForm:FormGroup;


  constructor(private studentService:StudentService,private schoolService:SchoolService,private degreeService:DegreeService) { 
    schoolService.getSchools().subscribe(
      (res)=>{this.schools = res; console.log(res);},
      (err)=>{alert("Fetching School caused an error");console.log(err);}
    );

    degreeService.getDegrees().subscribe(
      (res)=>{this.degrees =res; console.log(res);},
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
  onSubmit(data){
    data.password = this.HashPassword(data.password);
    console.log(data);
  }
  HashPassword(pass:string){
    const md5 = new Md5();
    return md5.appendStr(pass).end();
  }
}
