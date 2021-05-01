import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolService } from 'src/Services/school.service';

@Component({
  selector: 'app-schooldetails',
  templateUrl: './schooldetails.component.html',
  styleUrls: ['./schooldetails.component.css']
})
export class SchooldetailsComponent implements OnInit {
  id : any;
  SchoolDetails : any;

  constructor(private schoolService : SchoolService, private router : Router, ar : ActivatedRoute) {
    this.id = ar.snapshot.params['id'];
    schoolService.getSchoolById(this.id).subscribe((e:any) => {this.SchoolDetails = e})
   }

   NavigateToUpdate(){
     alert("clicked");
     /*
    this.router.navigate(['/schoolcrud/schoolupdatebyid/' + this.id]);
    */
  }

  ngOnInit(): void {
  }

}
