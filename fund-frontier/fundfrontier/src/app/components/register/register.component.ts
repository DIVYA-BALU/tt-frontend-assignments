import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  
  registerForm!: FormGroup;

  constructor(
    private registerService: RegisterService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  onSubmit() {
    this.registerService.register(this.registerForm.value).subscribe((data) => {
      console.log(data);
      this.router.navigate(['header/login'])
    });
  }
}
