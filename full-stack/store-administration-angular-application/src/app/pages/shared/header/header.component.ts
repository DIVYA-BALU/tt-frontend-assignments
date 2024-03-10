import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserDetailsService } from 'src/app/core/services/user-details.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  userEmail: string = '';
  role: string = '';

  private loginResponseSubscription: Subscription = new Subscription;

  constructor(private authService: AuthService, private router: Router, private userDetailsService: UserDetailsService) {

  }

  ngOnInit() {

    const loginResponseSubscription = this.userDetailsService.loginResponseSubject$.subscribe({
      next: (loginResponse) => {
        this.userEmail = loginResponse.userEmail,
          this.role = loginResponse.role.name
      }
    })
  }

  isLoggedIn(): boolean {
    return this.authService.isUserLoggedIn();
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    if (this.loginResponseSubscription)
      this.loginResponseSubscription.unsubscribe();
  }

}
