import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddTransactionService } from './add-transaction.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent {
  constructor(private router: Router, private addTransactionService: AddTransactionService, private formBuilder: FormBuilder) { }

  addTransaction: FormGroup;

  ngOnInit() {
    this.addTransaction = this.formBuilder.group({
      userName: [`${localStorage.getItem('userName')}`],
      category: ['', Validators.required],
      transactionType: ['', Validators.required],
      description: [],
      date: [<Date>new Date(), Validators.required],
      amount: ['', Validators.required]
    })
  }

  categories: string[] = [
    "Groceries",
    "Toy",
    "Cart",
    "Automobile",
    "Other"
  ]

  transactionTypes: string[] = [
    "Income",
    "Expense"
  ]

  onSubmit() {
    console.log(this.addTransaction.value.category);

    this.addTransaction.value.transactionType = this.addTransaction.value.transactionType.toUpperCase();

    this.addTransactionService.addTransaction(this.addTransaction.value).subscribe({
      next: (response: any) => {
        if (response.status === 200) {
          console.log(response);

          this.router.navigate(['viewStatement']);
        }
      },
      error: (error) => {
        console.log("error", error);

      },
      complete: () => {

      }
    })
  }

  categoryUpdate(value: string) {
    this.addTransaction.value.category = value;
  }

  transactionTypeUpdate(value: string) {
    this.addTransaction.value.transactionType = value;
  }
}