import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  yes(){
    localStorage.setItem('isLoggedin', 'false');
    this.route.navigate(['/login']);
  }
  no(){
    this.route.navigate(['/home']);
  }

}
