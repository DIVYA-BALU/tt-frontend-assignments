import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { SharedServiceService } from '../shared-service/shared-service.service';
import { ProfileService } from '../profile/profile.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  loginForm!: FormGroup;
  status: string = '';

  constructor(
    private loginService: LoginService,
    private sharedService: SharedServiceService,
    private profileService: ProfileService,
    private route: Router
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{8,20}$'
        ),
      ]),
    });
  }

  onLogin() {
    this.subscriptions.push(
      this.loginService.login(this.loginForm.value).subscribe(
        (data) => {
          Swal.fire({
            title: 'Thank you!',
            text: 'You are successfully logged in!',
            icon: 'success',
          });
          localStorage.setItem('accessToken', data.accessToken);
          this.sharedService.setLogin();
          this.subscriptions.push(
            this.profileService.getProfile().subscribe((data) => {
              localStorage.setItem('Role', data.role.roleName);
              localStorage.setItem(
                'Permission',
                JSON.stringify(data.authorities)
              );

              if (data.suscribedEndDate === null) {
                localStorage.setItem('subscribed', 'false');
              } else {
                localStorage.setItem('subscribed', 'true');
                localStorage.setItem(
                  'suscribedEndDate',
                  JSON.stringify(data.suscribedEndDate)
                );
              }

              if (data.role.roleName === 'USER') {
                this.route.navigate(['/user']);
              } else {
                this.route.navigate(['/employee']);
              }
              this.sharedService.setPermission();
              this.sharedService.setSubscribed();
            })
          );
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((data) => {
      data.unsubscribe();
    });
  }
}
