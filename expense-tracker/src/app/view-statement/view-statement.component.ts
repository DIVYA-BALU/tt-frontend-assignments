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

  startDate: any = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  endDate: any = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  totalTransaction: any = 0;
  totalAmount: bigDecimal = new bigDecimal(0);

  constructor(private viewStatementService: ViewStatementService) {
    this.getDetails();
    this.getTotalTransactions();
    console.log(this.totalTransaction);
    
  }

  dateChange() {
    console.log(this.startDate);
    console.log(this.endDate);

  }

  getDetails() {
    this.viewStatementService.getDetails().subscribe({
      next: (details) => {
        this.startDate = formatDate(details.dateAndTime, 'yyyy-MM-dd', 'en');
        console.log(this.startDate);
        
        if(details.transaction !==null){
          this.totalTransaction = details.transaction.length;
        }
      },
      error: (error) => {

      },
      complete: () => {

      }
    });
  }

  // getTotalIncome() {
  //   this.viewStatementService.getTotalIncome().subscribe({
  //     next: (details) => {
  //       this.totalAmount = this.totalAmount.add(new bigDecimal(details.totalIncome));
  //     },
  //     error: (error) => {
  //     },
  //     complete: () => {

  //     }
  //   });
  // }

  // getTotalExpense() {
  //   this.viewStatementService.getTotalExpense().subscribe({
  //     next: (details) => {
  //       this.totalAmount = this.totalAmount.subtract(new bigDecimal(details.totalExpense));
  //     },
  //     error: (error) => {
  //     },
  //     complete: () => {

  //     }
  //   });
  // }

  getTotalTransactions() {
    this.viewStatementService.getTotalTransaction().subscribe({
      next: (details) => {
        console.log(details);
        details.forEach(element => {
          this.data1.push(element);
        });
      },
      error : (error) => {

      },
      complete : () => {
        console.log(this.data1);
        
      }
    })
  }
  
  data1 : statementData1[] = []

}

interface statementData1 {
  "userName" : string,
  "category" : string,
  "description" : string,
  "dateAndTime" : string,
  "transactionType" : string,
  "amount" : any,
  "openingBalance" : any,
  "closingBalance" : any
}
