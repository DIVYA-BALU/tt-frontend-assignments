import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddAccountService } from './add-account.service';
import bigDecimal from 'js-big-decimal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent {

  constructor (private addAccountService : AddAccountService, private router : Router) { }

  addAccount : FormGroup;

  ngOnInit () {
    this.addAccount = new FormGroup({
      accountNumber : new FormControl(),
      accountHolderName : new FormControl(`${localStorage.getItem('userName')}`),
      bankName : new FormControl(),
      accountType : new FormControl(),
      totalBalance : new FormControl()
    });
  }

  onSubmit(){
    console.log(typeof(this.addAccount.value.totalBalance));

    this.addAccountService.addAccount(this.addAccount.value.accountNumber,this.addAccount.value.accountHolderName,this.addAccount.value.bankName,this.addAccount.value.accountType).subscribe({
      next : (response : any) => {
        if(response.status === 200){
          console.log("inserted successfully",response);
          this.router.navigate(['home']);
        }
      },
      error : (error) => {
        console.log("error",error);
      },
      complete : () => {

      }
    })
  }
}
