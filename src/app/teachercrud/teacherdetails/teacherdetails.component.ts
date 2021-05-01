import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from 'src/Services/teacher.service';

@Component({
  selector: 'app-teacherdetails',
  templateUrl: './teacherdetails.component.html',
  styleUrls: ['./teacherdetails.component.css']
})
export class TeacherdetailsComponent implements OnInit {
  id : any;
  TeacherDetails : any;

  constructor(ar : ActivatedRoute, private teacherService : TeacherService, private router : Router) {
    this.id = ar.snapshot.params['id'];
    teacherService.getTeacherById(this.id).subscribe((e:any) => {this.TeacherDetails = e ; console.log(this.TeacherDetails);})
   }

   NavigateToUpdate(){
     this.router.navigate(['/teachercrud/teacherupdatebyid/' + this.id]);
   }
   

  ngOnInit(): void {
  }

}
