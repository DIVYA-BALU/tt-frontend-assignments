import { Component } from '@angular/core';
import { UpdateTransactionService } from './update-transaction.service';
import { CommonService } from '../service/common.service';
import { FormGroup, FormBuilder, Validators, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';
import { editTransaction } from '../interface/editTransaction';
import { statementData1 } from '../view-statement/view-statement.component';

@Component({
  selector: 'app-update-transaction',
  templateUrl: './update-transaction.component.html',
  styleUrls: ['./update-transaction.component.css']
})
export class UpdateTransactionComponent {
  constructor(private updateTransactionService : UpdateTransactionService, private commonService : CommonService, private formBuilder : FormBuilder, private router :Router){ 
  }
  
  updateTransaction : FormGroup;
  
  ngOnInit() {
    this.updateTransaction = this.formBuilder.group({
      id: [],
      userName : [`${localStorage.getItem ('userName')}`],
      category : ['',Validators.required],
      transactionType : ['',Validators.required],
      description : [''],
      date : [<Date> new Date(),Validators.required],
      // amount : ['',Validators.required]
    })
    this.editTransaction();
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
  
  categoryUpdate(value : string){
    this.updateTransaction.value.category = value;
  }

  transactionTypeUpdate(value : string){
    this.updateTransaction.value.transactionType = value;
  }

  data : any;

  editTransaction(){
    this.commonService.getData().subscribe((val) =>{
      console.log(val);
      this.data = val;
      console.log(this.data);
    });

    
    // this.data = this.commonService.getData().category;
    this.updateTransaction.patchValue({
      id: this.data.id || '',
      category: this.data.category || '',
      // transactionType: this.data.transactionType || '',
      description: this.data.description || '', 
      date: this.data.date || new Date(),
    });
    console.log(this.updateTransaction);
  }

  onSubmit(){
    console.log(this.updateTransaction.value);
    this.updateTransactionService.updateTransaction(this.updateTransaction.value).subscribe({
      next : (response) => {
        console.log("response",response);
        if(response.status === 200){
          this.router.navigate(['viewStatement']);
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
