import { Component } from '@angular/core';
import { formatDate } from '@angular/common';
import { ViewStatementService } from './view-statement.service';
import bigDecimal from 'js-big-decimal';
import { CommonService } from '../service/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-statement',
  templateUrl: './view-statement.component.html',
  styleUrls: ['./view-statement.component.css']
})
export class ViewStatementComponent {

  role : string = `${localStorage.getItem('role')}`;

  startDate: string = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  endDate: string = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  transactionDate: Date = new Date();
  totalTransaction: number = 0;
  totalAmount: bigDecimal = new bigDecimal(0);

  constructor(private viewStatementService: ViewStatementService, private commonService : CommonService, private router : Router) {
    this.getDetails();
    this.getTotalTransactions();
  }

  dateChange() {
    console.log(this.startDate);
    console.log(this.endDate);
  }

  getDetails() {
    this.viewStatementService.getDetails().subscribe({
      next: (details) => {
        this.startDate = formatDate(details.dateAndTime, 'yyyy-MM-dd', 'en');
        
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

  getTotalTransactions() {
    this.viewStatementService.getTotalTransaction().subscribe({
      next: (details) => {
        details.forEach(element => {
          this.data1.push(element);
        });
      },
      error : (error) => {

      },
      complete : () => {
        
      }
    })
  }
  
  data1 : statementData1[] = [];

  editData(item : any){
    this.commonService.setData(item);
    this.router.navigate(['update-transaction']);
  }
}

interface statementData1 {
  "userName" : string,
  "category" : string,
  "description" : string,
  "date" : string,
  "transactionType" : string,
  "amount" : any,
  "openingBalance" : any,
  "closingBalance" : any
}
