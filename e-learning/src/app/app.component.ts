import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-learning';
  constructor(private router: Router) {}

  isCommonHeaderVisible(): boolean {
    return !this.router.url.includes('/instructor');
  }

  isInstructorHeaderVisible(): boolean {
    return this.router.url.includes('/instructor');
  }
}
