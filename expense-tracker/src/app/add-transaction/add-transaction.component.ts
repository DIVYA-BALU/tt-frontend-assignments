import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent {
  constructor(private router : Router) {}

  transactionName : string = "";

  category : string = "";

  categories : any [] = [
    "Groceries",
    "Toy",
    "Cart",
    "Automobile",
    "Other"
  ]

  transactionType :  string = "";

  transactionTypes : any[] = [
    "Income",
    "Expense"
  ]

  date : any =  formatDate(new Date(), 'yyyy-MM-dd', 'en');

  amount : BigInt = BigInt(0);

  addTransaction(){
    console.log(this.transactionName);
    console.log(this.category);
    console.log(this.transactionType);
    console.log(this.date);    
    console.log(this.amount);
    this.router.navigate(['/viewStatement']);
  }

  categoryUpdate(value : string){
    this.category = value;
  }

  transactionTypeUpdate(value : string){
    this.transactionType = value;
  }
}
