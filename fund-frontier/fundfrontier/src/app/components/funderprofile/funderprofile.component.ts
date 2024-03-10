import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Funder } from 'src/app/model/funder';
import { Studentdetails } from 'src/app/model/studentdetails';
import { FundersService } from 'src/app/services/funders.service';
import { FundsService } from 'src/app/services/funds.service';
import { LoginService } from 'src/app/services/login.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-funderprofile',
  templateUrl: './funderprofile.component.html',
  styleUrls: ['./funderprofile.component.scss']
})
export class FunderprofileComponent {

  constructor(
    private router: Router,
    private loginService: LoginService) { }

  
  logout() {
    this.loginService.logout();
    this.router.navigate(['/header/home'])
  }
}

