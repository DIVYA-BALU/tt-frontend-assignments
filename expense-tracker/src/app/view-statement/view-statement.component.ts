import { Component } from '@angular/core';
import { formatDate } from '@angular/common';
import { ViewStatementService } from './view-statement.service';
import bigDecimal from 'js-big-decimal';

@Component({
  selector: 'app-view-statement',
  templateUrl: './view-statement.component.html',
  styleUrls: ['./view-statement.component.css']
})
export class ViewStatementComponent {

  startDate: any = '';
  endDate: any = formatDate(new Date(), 'MMM dd yyyy', 'en');
  totalTransaction: any = '';
  totalAmount: any = new bigDecimal(0);

  constructor(private viewStatementService: ViewStatementService) {
    this.getDetails();
    this.getTotalIncome();
    this.getTotalExpense();
  }

  dateChange() {
    console.log(this.startDate);
    console.log(this.endDate);

  }

  getDetails() {
    this.viewStatementService.getDetails().subscribe({
      next: (details) => {
        this.startDate = formatDate(details.dateAndTime, 'MMM dd yyyy', 'en');
        this.totalTransaction = details.transaction.length;
      },
      error: (error) => {

      },
      complete: () => {

      }
    });
  }

  getTotalIncome() {
    this.viewStatementService.getTotalIncome().subscribe({
      next: (details) => {
        this.totalAmount = this.totalAmount.add(new bigDecimal(details.totalIncome));
      },
      error: (error) => {
      },
      complete: () => {

      }
    });
  }

  getTotalExpense() {
    this.viewStatementService.getTotalExpense().subscribe({
      next: (details) => {
        this.totalAmount = this.totalAmount.subtract(new bigDecimal(details.totalExpense));
      },
      error: (error) => {
      },
      complete: () => {

      }
    });
  }
  
  data1 : statementData1[] = [{
    "userName" : "nathis2",
    "email" : "nathis468@gmail.com",
    "category" : "sfjndsf",
    "description" : "sngdnjdsfng",
    "date" : "sngdfnkfd",
    "amount" : new bigDecimal(45),
    "openingBalance" : new bigDecimal(45),
    "closingBalance" : new bigDecimal(45)
  },
  {
    "userName" : "nathis2",
    "email" : "nathis468@gmail.com",
    "category" : "poiuytf",
    "description" : "sngdnjdsfng",
    "date" : "sngdfnkfd",
    "amount" : new bigDecimal(45),
    "openingBalance" : new bigDecimal(45),
    "closingBalance" : new bigDecimal(45)
  },
]

}

interface statementData1 {
  "userName" : string,
  "email" : string,
  "category" : string,
  "description" : string,
  "date" : string,
  "amount" : any,
  "openingBalance" : any,
  "closingBalance" : any
}
