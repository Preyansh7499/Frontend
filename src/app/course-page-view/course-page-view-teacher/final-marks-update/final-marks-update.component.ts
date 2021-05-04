import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CourseDetailsService } from 'src/app/Services/course-details.service';

@Component({
  selector: 'app-final-marks-update',
  templateUrl: './final-marks-update.component.html',
  styleUrls: ['./final-marks-update.component.css']
})
export class FinalMarksUpdateComponent implements OnInit {
  regid : any;
  updateForm : FormGroup;
  marks : any;
  addForm : FormGroup;
  constructor(ar : ActivatedRoute, private courseDetailsService : CourseDetailsService) {
    this.regid = ar.snapshot.params.id;
    courseDetailsService.getMarks(this.regid).subscribe(
      (m : any) => {
        this.marks = m;
        console.log(this.marks);
        this.updateForm.patchValue(
          {
            review1 : this.marks.review1,
            review2 : this.marks.review2,
            review3 : this.marks.review3,
          }
        )
      },
      err => {
        alert("You need to add marks first")
      }
    )
   }

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      review1 : new FormControl("",Validators.compose([Validators.required, this.r1Validator])),
      review2 : new FormControl("",Validators.compose([Validators.required, this.r2Validator])),
      review3 : new FormControl("",Validators.compose([Validators.required, this.r3Validator])),
    })

    this.addForm = new FormGroup({
      review1 : new FormControl("",Validators.compose([Validators.required, this.r1Validator])),
      review2 : new FormControl("",Validators.compose([Validators.required, this.r2Validator])),
      review3 : new FormControl("",Validators.compose([Validators.required, this.r3Validator])),
    })
  }

  onSubmitUpdate(data){

    console.log(data);

    console.log(this.regid);

    let User = {
      registerdId : this.regid,
      review1 : data.review1,
      review2 : data.review2,
      review3 : data.review3
    }
    console.log(User);
    this.courseDetailsService.updateMarks(this.regid, User).subscribe(
      (m : any) => {
        console.log(m);
        alert("Marks Updated");
      },
      err => {
        alert("error occurred");
        console.log(err);
      }
    )
  }

  onSubmitAdd(data){
    
    console.log(data);

    console.log(this.regid);

    let User = {
      registerdId : this.regid,
      review1 : data.review1,
      review2 : data.review2,
      review3 : data.review3
    }
    console.log(User);

    this.courseDetailsService.addMarks(this.regid,User).subscribe(
      (m:any) => {
        console.log(m);
        alert("Marks Added");
      },
      err => {
        alert("Error Occured");
        console.log(err);
      }
    )
  }


  r1Validator(m:any){
    let mark = m.value;
    console.log(mark);
    let min = 0;
    let max = 20;
    if(mark >= min && mark <= max){
      console.log("valid");
      return null;
    }
    else{
      console.log("Invalid");
      return {'review1' : true};
    }
  }
  r2Validator(m:any){
    let mark = m.value;
    console.log(mark);
    let min = 0;
    let max = 30;
    if(mark >= min && mark <= max){
      console.log("valid");
      return null;
    }
    else{
      console.log("Invalid");
      return {'review2' : true};
    }
  }
  r3Validator(m:any){
    let mark = m.value;
    console.log(mark);
    let min = 0;
    let max = 50;
    if(mark >= min && mark <= max){
      console.log("valid");
      return null;
    }
    else{
      console.log("Invalid");
      return {'review3' : true};
    }
  }

}
