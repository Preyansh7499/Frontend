import { Component } from '@angular/core';
import { LoginStatusService } from 'src/Services/login-status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';

  studentstatus : boolean = false;

  constructor(private myLoginStatus : LoginStatusService) {
      this.studentstatus = this.myLoginStatus.returnStudentStatus();
      console.log(this.studentstatus);
}

}
