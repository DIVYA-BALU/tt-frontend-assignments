import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { InvestmentService } from 'src/app/core/services/investment.service';
import { PopUpComponent } from '../../pop-up/pop-up.component';

@Component({
  selector: 'app-investment-dialog-form',
  templateUrl: './investment-dialog-form.component.html',
  styleUrls: ['./investment-dialog-form.component.scss']
})
export class InvestmentDialogFormComponent {

  isLoading: boolean = false;
  investmentForm: FormGroup;

  constructor(private fb: FormBuilder, private dialog: MatDialog, private investmentService: InvestmentService) {
    this.investmentForm = this.fb.group({
      amount: ['', [Validators.required, this.validateNumber]],
      description: ['', [Validators.required]],
    })
  }

  validateNumber(control: { value: any; }) {
    const value = control.value;

    if (isNaN(value)) {
      return { 'invalidNumber': true };
    }

    return null;
  }

  submit() {
    this.isLoading = true;
    console.log(this.investmentForm.value);
    
    this.investmentService.saveInvestment(this.investmentForm.value).subscribe({
      next: () => {
        this.isLoading = false,
          this.closeInvestmentDialogForm();
        this.investmentService.setTotalInvestmentSubject();
        this.dialog.open(PopUpComponent, {
          data: {
            message: 'Investment Saved Successfully',
          },
        });
      },
      error: (HttpErrorResponse) => {
        this.isLoading = false;
        alert('Error Occured Retry Later');
      }
    })
  }

  closeInvestmentDialogForm() {
    this.dialog.closeAll();
  }
}
