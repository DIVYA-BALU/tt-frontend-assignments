import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent {
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';
  role: string = '';
  constructor(private registerService: RegisterService, private router: Router) { }

  register() {
    this.registerService.register(this.firstname, this.lastname, this.email, this.password, this.role).subscribe({
      next: (content) => {
        // console.log("content",content);
        window.alert('Registeration Successful!');
      },
      error: (error) => {
        console.log("error:", error);
        window.alert('Enter valid User Details!');
      },
      complete: () => {
        this.router.navigate(['login']);
      }
    });
  }
}
