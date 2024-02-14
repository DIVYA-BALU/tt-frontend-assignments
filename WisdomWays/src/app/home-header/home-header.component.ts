import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';
import { TeachService } from '../teach/teach.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent {

  logged: boolean = false;
  instructor: boolean = false;
  isInstructorPage: boolean = false;

  constructor(private loginService: LoginService, private teachService: TeachService) { 

    if (loginService.isAuthenticated()) {
      this.logged = true;
    }

    if (teachService.isInstructor()) {
      // console.log(this.instructor);
      this.instructor = true;
    }
  }
}
