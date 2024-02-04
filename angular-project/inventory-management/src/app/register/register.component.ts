import { Component } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

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

  

  constructor(private registerService: RegisterService, private router: Router) { }

  
  checkPasswords(): void {
    if (this.user.password !== this.confirmPassword) {
      this.passwordsMatch = false;
  
    }
  }

  onSubmit(): void {
   
    console.log(this.user);
    this.registerService.register(this.user).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/login']);
      },
      (error) => {
        if (error.status === 400 && error.error === 'Email already exists') {
          this.emailError = 'This email is already in use. Please use a different email.';
        } else {
          console.log(error);
        }
      }
    );
  }

  onCancel(): void {
    this.router.navigate(['/login']);
  }


}
