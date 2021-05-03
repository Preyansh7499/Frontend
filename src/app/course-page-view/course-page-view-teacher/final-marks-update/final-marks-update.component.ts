import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
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
      review1 : new FormControl(),
      review2 : new FormControl(),
      review3 : new FormControl(),
    })

    this.addForm = new FormGroup({
      review1 : new FormControl(),
      review2 : new FormControl(),
      review3 : new FormControl(),
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
}
