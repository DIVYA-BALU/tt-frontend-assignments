import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Application } from 'src/app/model/application';
import { Funds } from 'src/app/model/funds';
import { Studentdetails } from 'src/app/model/studentdetails';
import { FundsService } from 'src/app/services/funds.service';
import { LoginService } from 'src/app/services/login.service';
import { RegisterService } from 'src/app/services/register.service';
import { StudentService } from 'src/app/services/student.service';

declare var Razorpay: any;

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.scss'],
})
export class ViewstudentComponent {


  value: number = 0;
  constructor(
    @Inject(MAT_DIALOG_DATA) public student: Studentdetails,
    private dialogRef: MatDialogRef<ViewstudentComponent>,
    private studentService: StudentService,
    private registerService: RegisterService,
    private loginService: LoginService,
    private router: Router,
    private fundsService: FundsService
  ) { }

  loginStatus: boolean = false;

  indivualStudent!: Studentdetails;

  funderEmail: string = '';

  funds: Funds = {
    _id: '',
    funderEmail: '',
    studentEmail: '',
    date: new Date(),
    totalAmount: 0.00,
    studentAmount: 0.00,
    maintainenceAmount: 0.00

  };


  ngOnInit() {
    this.studentService.viewStudent(this.student.email.email).subscribe((response) => {
      this.indivualStudent = response;
    })
  }

  onNoClick() {
    this.dialogRef.close();
  }

  payment() {
    
    this.loginService.getLoginStatus().subscribe(
      data => {
        this.loginStatus = data;
      }
    )

    if (!this.loginStatus) {
      this.dialogRef.close();
      this.router.navigate(['/header/login'])
    }
    else {
      this.loginService.getuserEmail().subscribe(
        (data) => {
          this.funderEmail = data;
          console.log(this.funderEmail);
        }
      )
      console.log(((this.value * 100) + ((10 / 100) * this.value)));
      
     if(this.funderEmail !== ''){
      console.log(((this.value * 100) + ((10 / 100) * this.value)));
        const RazorpayOptions = {
        description: 'Sample Razorpay demo',
        currency: 'INR',
        amount: ((this.value * 100) + ((7.5 / 100) * this.value)),
        name: "Divya",
        key: 'rzp_test_dfaTwJvV84YGAu',
        prefill: {
          name: 'Divya Balusamy',
          email: 'divyabalusamy559@gmail.com',
          phone: '1234567891'
        },
        theme: {
          color: '#f37254'
        },
        handler: (response: any) => {

          if (response.razorpay_payment_id) {
            console.log('Payment successful:', response.razorpay_payment_id);
            console.log(this.funderEmail);
            
            this.funds.funderEmail = this.funderEmail;
            this.funds.studentEmail = this.student.email.email;
            this.funds.date = new Date();
            this.funds.totalAmount = this.value;
            this.funds.studentAmount = this.value;
            this.funds.maintainenceAmount = (7.5 * this.value) / 100;
            this.fundsService.saveFund(this.funds).subscribe();

          } else {
            console.log('Payment failed or was cancelled');
            // Handle failure logic here
          }
        },
        modal: {
          ondismiss: () => {
            console.log('dismissed');

          }
        }
      }

      Razorpay.open(RazorpayOptions)
    }
  }
  }
  }


