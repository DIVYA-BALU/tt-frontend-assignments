import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-admin-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-nav-bar.component.html',
  styleUrls: ['./admin-nav-bar.component.scss'],
})
export class AdminNavBarComponent {
  constructor(private authService: AuthService, private router: Router) {}
  activeLink: string | null = null;

  setActiveLink(link: string): void {
    if (link === 'logout') {
      this.authService.logout();
      this.router.navigate(['pet']);
    }
  }
}
