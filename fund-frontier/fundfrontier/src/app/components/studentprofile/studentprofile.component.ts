import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.scss'],
})
export class StudentprofileComponent {

  constructor(private loginService: LoginService,
              private router: Router) { }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/header/home'])
  }



}
