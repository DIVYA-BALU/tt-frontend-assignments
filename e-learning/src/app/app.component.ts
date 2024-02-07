import { Component } from '@angular/core';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-learning';

  logged: boolean = false;

  constructor(private loginService: LoginService){

    if (loginService.isAuthenticated()) {
      this.logged = true;
    }
  }
}
