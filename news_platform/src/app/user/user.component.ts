import { Component } from '@angular/core';
import { SharedServiceService } from '../shared-service/shared-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  logged!: boolean;

  constructor(private sharedService: SharedServiceService, private route: Router){
    sharedService.loginStatusData.subscribe( (data) => {
      this.logged = data;
    })
  }

  logout() {
    this.sharedService.setLogout();
    localStorage.clear();
    this.route.navigate(['/login']);
  }
}
