import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';
import { authority } from '../models/authority';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  authorities: authority[] = [];

  manageUser: boolean = false;
  login: boolean = false;

  // loginAuthority: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  // loginData$ = this.loginAuthority.asObservable();

  constructor(private loginService: LoginService) {
  //   const getLogin = localStorage.getItem('isLoggedIn') != null;  
    
  //   this.loginAuthority.next(getLogin);

  //   this.login = this.loginAuthority.getValue();
   }

  ngDoCheck(){
    this.login = localStorage.getItem('isLoggedIn') != null;
    
    const storage = localStorage.getItem('authorities');

    if(storage){
      this.authorities = JSON.parse(storage);
    }

    this.authorities.some( (value: any) => {
      if (value.authority === 'MANAGE USER') {
        this.manageUser = true;
      }
    })
  }

  logout() {
    this.loginService.logout();
  }
}
