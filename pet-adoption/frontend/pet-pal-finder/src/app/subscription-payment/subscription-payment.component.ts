import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PaymentService } from '../service/payment.service';
import { SubscriptionPlan, SubscriptionTransaction, VeterinaryDoctor } from '../models/models';
import { AuthService } from '../service/auth.service';
import { ProfileService } from '../service/profile.service';
declare const Razorpay:any;

@Component({
  selector: 'app-subscription-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subscription-payment.component.html',
  styleUrls: ['./subscription-payment.component.scss']
})
export class SubscriptionPaymentComponent {


  constructor(private paymentService:PaymentService, public dialogRef: MatDialogRef<SubscriptionPaymentComponent>,
    @Inject(MAT_DIALOG_DATA) public id:string,private formBuilder:FormBuilder, private profileService:ProfileService ){}

    subscriptionPlans:SubscriptionPlan [] = []

    plan:SubscriptionPlan = {
      _id: '',
      amount: 0,
      months: 0
    }

    doctor?:VeterinaryDoctor;


    subscription:SubscriptionTransaction = {
      _id: null,
      currentPlan: {
        _id: '',
        amount: 0,
        months: 0
      },
      subscribedOn: new Date,
      validTill: new Date,
      paymentId: '',
      subscriberId: ''
    };

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
          name: this.doctor?.name,
          email: this.doctor?.email,
          contact: this.doctor?.contactNumber
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
      this.subscription.currentPlan = this.plan;
      this.subscription.paymentId = response.razorpay_payment_id;
      this.subscription.subscriberId = this.doctor?._id || '';
      this.paymentService.addSubscription(this.subscription).subscribe({next: (val) => {
        console.log(val);
        
      }})
      console.log(response);
    }

    pay(subscriptionPlan:SubscriptionPlan) {
      this.plan = subscriptionPlan;
      this.paymentService.createOrder(subscriptionPlan.amount).subscribe({
        next: (data) => {
          this.openTransactionModel(data)
        }
      })
      }

    ngOnInit(){
      this.profileService.sharedUser$.subscribe({
        next: (val) => {
          if ('isSubscribed' in val) {
            this.doctor = val;
        }
        },
      });
      this.paymentService.getPlANS().subscribe({
        next: (val) => {
         this.subscriptionPlans = val
        }
      })
    }

}
