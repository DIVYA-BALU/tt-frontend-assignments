import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddAccountService } from './add-account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent {

  constructor(private addAccountService: AddAccountService, private router: Router) { }

  addAccount: FormGroup;

  ngOnInit() {
    this.addAccount = new FormGroup({
      accountNumber: new FormControl(),
      accountHolderName: new FormControl(`${localStorage.getItem('userName')}`),
      bankName: new FormControl(),
      accountType: new FormControl(),
      financialAdvisorName: new FormControl(),
      balance: new FormControl()
    });
  }

  accountTypes: string[] = [
    "Savings",
    "Current"
  ]

  accountTypeChange(value: string) {
    this.addAccount.value.accountType = value;
  }

  onSubmit() {
    // console.log(typeof(this.addAccount.value.totalBalance));

    console.log(this.addAccount.value);
    
    this.addAccountService.addAccount(this.addAccount.value).subscribe({
      next: (response: any) => {
        if (response.status === 200) {
          console.log("inserted successfully", response);
          localStorage.setItem('accountNumber', this.addAccount.value.accountNumber);
          this.router.navigate(['home']);
        }
      },
      error: (error) => {
        console.log("error", error);
      },
      complete: () => {

      }
    })
  }
}
