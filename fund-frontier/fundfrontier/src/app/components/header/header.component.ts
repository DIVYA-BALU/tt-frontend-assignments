import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  role!: string;
  loggedin: boolean = false;
  constructor(private loginService: LoginService) {

  }

  ngOnInit() {
    this.loginService.getLoginStatus().subscribe(
      (data) => {
        this.loggedin = data;
      }
    )

    if (this.loggedin) {
      this.loginService.getRole().subscribe(
        (data) => {
          this.role = data;
        }
      )
    }
  }

}
