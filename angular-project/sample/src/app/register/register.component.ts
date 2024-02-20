import { Component } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  emailError: string = '';

  confirmPassword: string = '';

  passwordsMatch: boolean = true;

  user: User = new User();

  constructor(
    private registerService: UserService,
    private router: Router
  ) {}

  checkPasswords(): void {
    if (this.user.password !== this.confirmPassword) {
      this.passwordsMatch = false;
    }
  }

  onSubmit(): void {
    console.log(this.user);
    this.registerService.register(this.user).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/login']);
      },
      (error) => {
        if (error.status === 400 && error.error === 'Email already exists') {
          this.emailError =
            'This email is already in use. Please use a different email.';
        } else {
          console.log(error);
        }
      }
    );
  }

  onCancel(): void {
    this.router.navigate(['dashboard/users']);
  }
}

