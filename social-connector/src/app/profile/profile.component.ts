import { Component } from '@angular/core';
import { ProfileService } from '../service/profile.service';
import { pageResponse } from '../models/pageResponse';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [MatMenuModule, MatIconModule],
})
export class ProfileComponent {
  profile?: pageResponse;
  constructor(
    private profileService: ProfileService,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.profileService
      .getPageDetails(localStorage.getItem('id') || ' ')
      .subscribe({
        next: (httpResult) => {
          console.log('httpresult', httpResult);
          this.profile = httpResult;
        },
        error: (error) => {
          console.log('error', error);
        },
        complete: () => {},
      });
  }

  logout() {
    localStorage.clear();
    this.loginService.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
