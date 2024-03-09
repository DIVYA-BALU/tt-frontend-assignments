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
  showBadge!: boolean;

  constructor(
    private sharedService: SharedServiceService,
    private route: Router,
    private userService: UserService
  ) {

    // this.getStocks();
  }

  inputText: string = '';

  ngOnInit(){
    this.sharedService.loginStatusData.subscribe((data) => {
      this.logged = data;
      console.log(this.logged);
    });

    this.sharedService.badgeValueData$.subscribe((data) => {
      this.showBadge = data;
      console.log(this.showBadge);
      
    })
  }

  logout() {
    this.route.navigate(['/login']);
    localStorage.clear();
    this.sharedService.setLogout();
  }

  login() {
    this.route.navigate(['/login']);
  }

  subscribe() {
   
  }

  signup() {
    this.route.navigate(['/signup']);
  }

  getStocks(){
    this.userService.getStocks().subscribe( (data) => {
      console.log(data);
    })
  }

  timer: any;

  onSearch(){

   clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.sharedService.setSearchValue(this.inputText);
    }, 1000);
    
    this.route.navigate(['user/search']);
  }

  OnClick(){
    this.route.navigate(['user/home']);
  }
}
