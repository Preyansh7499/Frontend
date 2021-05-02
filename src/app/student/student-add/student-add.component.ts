import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DegreeService } from 'src/app/Services/degree.service';
import { SchoolService } from 'src/app/Services/school.service';
import { StudentService } from 'src/app/Services/student.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  schools:any;
  degrees:any;
  studentAddForm:FormGroup;

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
    this.studentAddForm = new FormGroup({
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
    this.studentService.addStudent(data).subscribe(
      (res)=>{alert("Student Added");},
      (err)=>{alert("error occured");console.log(err);}
    );    
  }
  HashPassword(pass:string){
    const md5 = new Md5();
    return md5.appendStr(pass).end();
  }
}
