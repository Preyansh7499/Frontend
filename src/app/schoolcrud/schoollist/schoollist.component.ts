import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'src/Services/school.service';

@Component({
  selector: 'app-schoollist',
  templateUrl: './schoollist.component.html',
  styleUrls: ['./schoollist.component.css']
})
export class SchoollistComponent implements OnInit {
  schools : any;

  constructor(private schoolService:SchoolService) {
    schoolService.getSchools().subscribe(
      (t : any) => {
        this.schools = t;
        console.log(this.schools);
      },
      err => {
        alert("error occured");
        console.log(err);
      }
    )
   }

  ngOnInit(): void {
  }

}
