import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddTransactionService } from './add-transaction.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent {
  constructor(private router : Router, private addTransactionService : AddTransactionService, private formBuilder: FormBuilder) { }

  addTransaction : FormGroup;

  dateTest : Date = new Date();

  ngOnInit() {
    this.addTransaction = this.formBuilder.group({
      userName : [`${localStorage.getItem('userName')}`],
      category : [],
      transactionType : [],
      description : [],
      date : <Date> new Date(),
      amount : []
    })
  }

  categories : string[] = [
    "Groceries",
    "Toy",
    "Cart",
    "Automobile",
    "Other"
  ]

  transactionTypes : string[] = [
    "Income",
    "Expense"
  ]

  onSubmit(){
    this.addTransaction.value.transactionType = this.addTransaction.value.transactionType.toUpperCase();

    // this.addTransaction.value.date = this.addTransaction.value.date.;

    console.log(this.addTransaction.value);

    console.log(typeof(this.addTransaction.value.date));

    this.addTransactionService.addTransaction(this.addTransaction.value).subscribe({
      next : (response : any) => {
        console.log("response",response);
        
      },
      error : (error) => {
        console.log("error",error);
        
      },
      complete : () => {

      }
    })
  }

  private formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  categoryUpdate(value : string){
    this.addTransaction.value.category = value;
  }

  transactionTypeUpdate(value : string){
    this.addTransaction.value.transactionType = value;
  }
}

// interface transactionInterface{
//   userName : FormControl<string>,
//   category : FormControl<string>,
//   transactionType : FormControl<string>,
//   description : FormControl<string>,
//   dateAndTime : FormControl<Date>,
//   amount : FormControl<number>
// }