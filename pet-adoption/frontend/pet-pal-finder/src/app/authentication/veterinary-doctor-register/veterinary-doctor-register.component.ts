import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-veterinary-doctor-register',
  templateUrl: './veterinary-doctor-register.component.html',
  styleUrls: ['./veterinary-doctor-register.component.scss'],
})
export class VeterinaryDoctorRegisterComponent {
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  private subscription: Subscription = new Subscription();

  formResponse: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(1)]],
    email: ['', [Validators.required, Validators.email]],
    profilePhoto: [],
    location: this.formBuilder.group({
      doorNo: ['', [Validators.required, Validators.minLength(1)]],
      street: ['', [Validators.required, Validators.minLength(1)]],
      city: ['', [Validators.required, Validators.minLength(1)]],
      district: ['', [Validators.required, Validators.minLength(1)]],
      state: ['', [Validators.required, Validators.minLength(1)]],
      country: ['', [Validators.required, Validators.minLength(1)]],
    }),
    degree: ['', [Validators.required, Validators.minLength(1)]],
    contactNumber: ['', [Validators.required, Validators.minLength(1)]],
  });

  profile: File | null = null;
  certificate: File | null = null;

  getImage(event: any) {}
  getProfile(event: any) {
    this.profile = event.target.files[0];
  }
  getCertificate(event: any) {
    this.certificate = event.target.files[0];
  }

  request() {
    if (this.profile === null || this.certificate === null) {
      alert('please add the profile');
      return;
    }
    const formData: FormData = new FormData();
    formData.append('name', this.formResponse.value.name);
    formData.append('email', this.formResponse.value.email);
    formData.append('profilePhoto', this.profile);
    formData.append('location.doorNo', this.formResponse.value.location.doorNo);
    formData.append('location.street', this.formResponse.value.location.street);
    formData.append('location.city', this.formResponse.value.location.city);
    formData.append(
      'location.district',
      this.formResponse.value.location.district
    );
    formData.append('location.state', this.formResponse.value.location.state);
    formData.append(
      'location.country',
      this.formResponse.value.location.country
    );
    formData.append('degree', this.formResponse.value.degree);
    formData.append('degreeCertificate', this.certificate);
    formData.append('contactNumber', this.formResponse.value.contactNumber);

    Swal.showLoading();
    this.subscription = this.authService
      .registerVeterinaryDoctor(formData)
      .subscribe({
        next: (res) => {
          Swal.close();
          Swal.fire({
            title: 'Requested!',
            text: 'Please wait for the confirmation mail',
            icon: 'success',
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              this.router.navigate(['pet']);
            }
          });
        },
      });
  }

  ngOnDestory() {
    this.subscription.unsubscribe();
  }
}
