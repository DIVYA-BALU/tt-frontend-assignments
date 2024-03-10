import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-studentregistration',
  templateUrl: './studentregistration.component.html',
  styleUrls: ['./studentregistration.component.scss']
})
export class StudentregistrationComponent {

  applicationForm!: FormGroup;

  profile!: File;
  aadhar!: File;
  income!: File;
  fee!: File;
  idcard!: File;


  constructor(
    private studentService: StudentService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }





  ngOnInit() {
    this.applicationForm = this.formBuilder.group({
      profilePhoto: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      gender: ['', Validators.required],
      countryOfBirth: ['', Validators.required],
      countryOfResidence: ['', Validators.required],
      dateOfBirth: [new Date(), Validators.required],
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
      endDate: [new Date(), Validators.required],
      shortStory: ['', Validators.required],
    });
  }

  setProfile(event: any) {
    this.profile = event.target.files[0];
  }

  setAadhar(event: any) {
    this.aadhar = event.target.files[0];
  }

  setIncome(event: any) {
    this.income = event.target.files[0];
  }

  setIdcard(event: any) {
    this.idcard = event.target.files[0];
  }

  setFee(event: any) {
    this.fee = event.target.files[0];
  }



  formdata: FormData = new FormData();

  onSubmit() {

    console.log(this.applicationForm.value);
    console.log(new Date(this.applicationForm.value.dateOfBirth).toISOString());

    this.formdata.append('profilePhoto', this.profile),
      this.formdata.append('firstName', this.applicationForm.value.firstName),
      this.formdata.append('lastName', this.applicationForm.controls['lastName'].value),
      this.formdata.append('email', this.applicationForm.controls['email'].value),
      this.formdata.append('phoneNumber', this.applicationForm.controls['phoneNumber'].value),
      this.formdata.append('gender', this.applicationForm.controls['gender'].value),
      this.formdata.append('countryOfBirth', this.applicationForm.value.countryOfBirth),
      this.formdata.append('countryOfResidence', this.applicationForm.controls['countryOfResidence'].value),
      this.formdata.append('dateOfBirth', this.applicationForm.controls['dateOfBirth'].value.toISOString()),
      this.formdata.append('address', this.applicationForm.controls['address'].value),
      this.formdata.append('city', this.applicationForm.controls['city'].value),
      this.formdata.append('state', this.applicationForm.controls['state'].value),
      this.formdata.append('zipCode', this.applicationForm.controls['zipCode'].value),
      this.formdata.append('school', this.applicationForm.controls['school'].value),
      this.formdata.append('aadharCardProof', this.aadhar),
      this.formdata.append('incomeProof', this.income),
      this.formdata.append('collegeName', this.applicationForm.controls['collegeName'].value),
      this.formdata.append('course', this.applicationForm.controls['course'].value),
      this.formdata.append('studentIdentityProof', this.idcard),
      this.formdata.append('studentId', this.applicationForm.controls['studentId'].value),
      this.formdata.append('fundRequired', this.applicationForm.controls['fundRequired'].value),
      this.formdata.append('feeDetails', this.fee),
      this.formdata.append('endDate', this.applicationForm.controls['endDate'].value.toISOString()),
      this.formdata.append('shortStory', this.applicationForm.controls['shortStory'].value);


    this.studentService.saveApplication(this.formdata).subscribe(
      (response) => {
        this.router.navigate(['/header/home'])
      }
    )
  }

}
