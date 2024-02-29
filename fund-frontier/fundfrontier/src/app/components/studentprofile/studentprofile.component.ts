import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.scss'],
})
export class StudentprofileComponent {
  applicationForm!: FormGroup;

  constructor(
    private studentService: StudentService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.applicationForm = this.formBuilder.group({
      profilePhoto: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      gender: ['', Validators.required],
      countryOfBirth: ['', Validators.required],
      countryOfResidence: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      school: ['', Validators.required],
      aadharCardProof: ['', Validators.required],
      incomeProof: ['', Validators.required],
      collegeName: ['', Validators.required],
      yearOfStudy: ['', Validators.required],
      course: ['', Validators.required],
      studentIdentityProof: ['', Validators.required],
      studentId: ['', Validators.required],
      fundRequired: ['', Validators.required],
      feeDetails: ['', Validators.required],
      endDate: ['', Validators.required],
      shortStory: ['', Validators.required],
    });
  }

  onSubmit() {
    
  }
}
