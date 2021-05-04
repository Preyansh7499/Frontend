import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SchoolService } from 'src/Services/school.service';

@Component({
  selector: 'app-schooladd',
  templateUrl: './schooladd.component.html',
  styleUrls: ['./schooladd.component.css']
})
export class SchooladdComponent implements OnInit {
  schoolAddForm : FormGroup;
  school : any;
  id : any;

  constructor(private schoolService : SchoolService, private router : Router) { 
  }

  onSubmit(data){
    console.log(data);
    this.schoolService.addSchool(data).subscribe(
      (t:any) => {
        this.school = t;
        alert("School added")
      },
      err => {
        alert("error occured");
        console.log(err);
      }
    )
    
  }

  sethod(){
    this.router.navigate(['/schoolcrud/schoolteacherlisthod']);
  }

  setdean(){

  }

  ngOnInit(): void {
    this.schoolAddForm = new FormGroup({
      schoolName: new FormControl("",Validators.required),
      buildingName: new FormControl("",Validators.required)
    })
  }
}
