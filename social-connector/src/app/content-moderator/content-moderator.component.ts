import { Component } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-moderator',
  templateUrl: './content-moderator.component.html',
  styleUrls: ['./content-moderator.component.scss'],
})
export class ContentModeratorComponent {
  constructor(private router: Router, private loginService: LoginService) {}
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
    this.loginService.isLoggedIn = false;
  }
}
