import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeterinaryDoctorService } from '../service/veterinary-doctor.service';
import { AuthService } from '../service/auth.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import { PendingDoctorRequestComponent } from '../pending-doctor-request/pending-doctor-request.component';
import { AcceptedDoctorRequestComponent } from '../accepted-doctor-request/accepted-doctor-request.component';
import { PaymentService } from '../service/payment.service';
import { ProfileService } from '../service/profile.service';
import { Adopter, Organization, VeterinaryDoctor } from '../models/models';
import { SubscriptionPaymentComponent } from '../subscription-payment/subscription-payment.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
declare const Razorpay:any;

@Component({
  selector: 'app-recived-doctor-request',
  standalone: true,
  imports: [CommonModule,MatSidenavModule,PendingDoctorRequestComponent,AcceptedDoctorRequestComponent,MatDialogModule],
  templateUrl: './recived-doctor-request.component.html',
  styleUrls: ['./recived-doctor-request.component.scss']
})
export class RecivedDoctorRequestComponent {

  isSubscribed:boolean = false;

  currentTab:string = "pending"
  tabChange(tab:string){
    
      this.currentTab = tab;
    
  }
  constructor(private paymentService:PaymentService, private profileService:ProfileService,public dialog: MatDialog){}

  openTransactionModel(response: any) {
    const options = {
      order_id: response.orderId,
      key: response.key,
      amount: response.amount,
      currency: response.currency,
      name: 'PetPalFinder',
      description: 'Payment of online shopping',
      image: 'https://img.freepik.com/free-vector/mobile-bank-users-transferring-money-currency-conversion-tiny-people-online-payment-cartoon-illustration_74855-14454.jpg',
      prefill: {
        name: 'SS',
        email: 'sudhakarsenthilkumar445@gmail.com',
        contact: '9751318371'
      },
      handler: (response: any) => {
        if(response != null && response.razorpay_payment_id != null)
          this.processResponse(response);
        else
          alert('Payment failed..');
      },
      notes: {
        address: 'Book the person and Cook your food'
      },
      theme: {
        color: '#F37254'
      },
      modal: {
        ondismiss: () => {
          console.log('dismissed');
        }
      }
    };
 
    let razorpayObject: any = new Razorpay(options);
    razorpayObject.open();
 
  }
  processResponse(response: any) {
    console.log(response);
  }

  click(){
    this.openDialog('30ms', '30ms');
  
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(SubscriptionPaymentComponent, {
      width: '150vh',
      height: '90vh',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {},
    });
  }

  ngOnInit(){
    this.profileService.sharedUser$.subscribe({
      next: (user:VeterinaryDoctor |Adopter | Organization) => {
        if ('isSubscribed' in user) {
          this.isSubscribed = user.isSubscribed;
      }
      }
    })
  }
}
  
