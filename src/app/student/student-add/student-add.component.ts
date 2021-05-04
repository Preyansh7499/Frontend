import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private studentService:StudentService,private schoolService:SchoolService,private degreeService:DegreeService, private fb : FormBuilder) {
   
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
      this.studentAddForm = this.fb.group({
      name: ["",Validators.required],
      yearOfJoining:["",Validators.required],
      dateOfBirth:["",Validators.required],
      password:["",Validators.required],
      confirmPassword:["",Validators.required],
      degreeId:["",Validators.required],
      schoolId:["",Validators.required],
      emailid:["",Validators.required],    
    },
    );
  }
  onSubmit(data){
   
    data.password = this.HashPassword(data.password);

    let User = {
      name: data.name,
      emailid:data.emailid,
      yearOfJoining:data.yearOfJoining,
      dateOfBirth: data.dateOfBirth,
      password: data.password,
      degreeId:data.degreeId,
      schoolId:data.schoolId,
    };

    this.studentService.addStudent(User).subscribe(
      (res)=>{this.studentAddForm.reset();},
      (err)=>{alert("error occured");console.log(err);}
    );    
  }
  HashPassword(pass:string){
    const md5 = new Md5();
    return md5.appendStr(pass).end();
  }
}
