import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/Services/student.service';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  studentId:number;
  student:any;
  
  constructor(ar:ActivatedRoute,private studentService:StudentService,private router: Router) { 
    this.studentId = parseInt(ar.snapshot.params['id']);
    this.studentService.getStudentById(this.studentId).subscribe(
      (res)=>{this.student = res;console.log(this.student);}
    )
  }

  ngOnInit(): void {
  }
  RouteRedirectToProctor(sid){
    this.router.navigateByUrl('Students/Proctor/'+sid);
  }
  RouteRedirectToUpdate(sid){
    this.router.navigateByUrl('Students/Update/'+sid);
  }
  RouteRedirectToDelete(sid){
    this.router.navigateByUrl('Students/Delete/'+sid);
  }
}
