import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-logOut',
  templateUrl: './logOut.component.html',
  styleUrls: ['./logOut.component.sass']
})
export class LogoutComponent {
  constructor(private route: Router, private cookieService: CookieService) { }
  logOut() {
    localStorage.setItem('isLogged', 'false');
    this.cookieService.delete('isLogged');
    this.route.navigate(['login']);
  }
  redirect() {
    this.route.navigate(['admin']);
  }
}
