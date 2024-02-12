import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {
  userName : string = '';
  accountNumber : string = '';
  bankName : string = '';
  accountType : string = '';
  balance : string = '';
  accountCreationDate : any = '';
  currentDate : any = formatDate(new Date(), 'MMM dd yyyy', 'en');
  transactions : string = '';

  constructor(private homeService : HomeService){
    this.getAccountDetails();
  }
  getAccountDetails(){
    this.homeService.getDetails().subscribe({
      next: (details) => {
        console.log("no error : ",details);        
        this.accountNumber = details.accountNumber;
        this.bankName = details.bankName;
        this.accountType = details.accountType;
        this.balance = details.balance;
        this.accountCreationDate = formatDate(details.dateAndTime, 'MMM dd yyyy', 'en');
        if(details.transaction === null){
          this.transactions = '0';
        }
        else{
          this.transactions = details.transaction.length;
        }
      },
      error:(error) => {
        console.log(error);
      },
      complete : () =>{
      }
    });  
  }
}
