import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service/shared-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from './signup.service';
import { ProfileService } from '../profile/profile.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  signupForm!: FormGroup;
  status: string = '';

  constructor(
    private signupService: SignupService,
    private sharedService: SharedServiceService,
    private profileService: ProfileService,
    private route: Router
  ) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{8,20}$'
        ),
      ]),
    });
  }

  onsignup() {
    this.subscriptions.push(
      this.signupService.signup(this.signupForm.value).subscribe(
        (data) => {
          Swal.fire({
            title: 'Thank you!',
            text: 'You are successfully created account!',
            icon: 'success',
          });
          localStorage.setItem('accessToken', data.accessToken);
          this.sharedService.setLogin();
          this.subscriptions.push(
            this.sharedService.loginStatusData.subscribe((data) => {
              if (data === true) {
                this.profileService.getProfile().subscribe((data) => {
                  localStorage.setItem(
                    'suscribedEndDate',
                    JSON.stringify(data.suscribedEndDate)
                  );
                  if (data.role.roleName === 'USER') {
                    localStorage.setItem('Role', data.role.roleName);
                    localStorage.setItem(
                      'Permission',
                      JSON.stringify(data.authorities)
                    );
                    this.route.navigate(['/user']);
                  } else {
                    localStorage.setItem('Role', data.role.roleName);
                    localStorage.setItem(
                      'Permission',
                      JSON.stringify(data.authorities)
                    );
                    this.route.navigate(['/employee']);
                  }
                });
              }
            })
          );
          this.sharedService.setPermission();
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
