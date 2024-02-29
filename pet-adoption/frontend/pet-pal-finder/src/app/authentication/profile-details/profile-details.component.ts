import { Component, HostListener } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent {

  constructor(private fb: FormBuilder, private route: Router) { }
  private file: File | null = null;
  registerForm = this.fb.group({
    _id: '',
    companyName: ['', Validators.required],
    empCount: [0, Validators.required],
    name: ['', Validators.required],
    phoneno: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    companyType: ['', Validators.required],
    location: ['', Validators.required],
    image: this.file,
  });

  @HostListener('change', ['$event.target.files']) emitFiles(event: FileList) {
    const file = event && event.item(0);
    this.file = file;
  }

  register() {

    
  }
}
