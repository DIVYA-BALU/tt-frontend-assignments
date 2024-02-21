import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';

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

  constructor(private homeService : HomeService, private router: Router){
    this.getAccountDetails();
  }
  getAccountDetails(){
    this.homeService.getDetails().subscribe({
      next: (details) => {
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
      },
      complete : () =>{
      }
    });  
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }
}
