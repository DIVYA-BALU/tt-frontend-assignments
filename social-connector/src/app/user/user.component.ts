import { Component } from '@angular/core';
import { ProfileService } from '../service/profile.service';
import { pageResponse } from '../models/pageResponse';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  constructor(private profileService: ProfileService) {}
  profile?: pageResponse;
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
}
