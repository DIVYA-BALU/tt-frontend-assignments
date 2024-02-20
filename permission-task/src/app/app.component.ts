import { Component } from '@angular/core';
import { LoginService } from './login/login.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'permission-task';

  logout: boolean = false;

  login: boolean = false;

  loginAuthority: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loginData$ = this.loginAuthority.asObservable();

  constructor(private loginService: LoginService) {
    // const getLogin = localStorage.getItem('isLoggedIn') == null;  
    
    // this.loginAuthority.next(getLogin);

    // this.logout = this.loginAuthority.subscribe( (data) => {
      
    // })
  }

  ngDoCheck() {
    if (localStorage.getItem('isLoggedIn') === 'valid') {
      this.login = true;
    }

    if (localStorage.getItem('isLoggedIn') == null) {
      this.login = false;
    }
  }

}
