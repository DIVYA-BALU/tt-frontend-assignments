import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
// import * as Razorpay from 'razorpay';
import { UserService } from 'src/app/services/user.service';

declare var Razorpay: any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  orderForm: any;

  constructor(private userService: UserService,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.orderForm = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      district: ['', Validators.required],
      taxType: ['', Validators.required]
    })
  }
  
  createTransaction(orderForm: NgForm) {
    const amount = 200;
    this.userService.createTransaction(amount).subscribe(
      (response) => {
        console.log(response);
        this.openTransactionModal(response, orderForm);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  openTransactionModal(response: any, orderForm: NgForm) {
    let options = {
      order_id: response.orderId,
      key_id: response.key,
      amount: response.amount,
      currency: response.currency,
      name: 'Hello User',
      description: 'Pay your taxes from home',
      image: 'https://www.shutterstock.com/image-vector/people-sending-receiving-money-wireless-260nw-465600824.jpg',
      handler: (response: any) => {
        if (response != null && response.razorpay_payment_id != null) {
          this.processResponse(response, orderForm);
        }
        else alert("Payment failed");
      },
      prefill: {
        name: 'User',
        email: 'user@gmail.com',
        contact: '9876543210'
      },
      notes: {
        address: 'Online Transactions'
      },
      theme: {
        color: '#F37254'
      }
    };

    let razorpayObj = new Razorpay(options);
    razorpayObj.open();
  }

  processResponse(resp: any, orderForm: NgForm) {
    console.log(resp);
  }
}
