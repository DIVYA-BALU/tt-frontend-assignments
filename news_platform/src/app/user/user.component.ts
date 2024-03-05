import { Component } from '@angular/core';
import { SharedServiceService } from '../shared-service/shared-service.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  logged!: boolean;
  panelOpenState = false;

  constructor(
    private sharedService: SharedServiceService,
    private route: Router,
    private userService: UserService
  ) {
    sharedService.loginStatusData.subscribe((data) => {
      this.logged = data;
    });

    this.getStocks();
  }

  logout() {
    this.sharedService.setLogout();
    localStorage.clear();
    this.route.navigate(['/login']);
  }

  login() {
    this.route.navigate(['/login']);
  }

  subscribe() {
    console.log('subscribe');
  }

  signup() {
    this.route.navigate(['/signup']);
  }

  getStocks(){
    this.userService.getStocks().subscribe( (data) => {
      console.log(data);
    })
  }
}
