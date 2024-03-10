import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { InvestmentService } from 'src/app/core/services/investment.service';
import { PopUpComponent } from '../../pop-up/pop-up.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-investment-dialog-form',
  templateUrl: './investment-dialog-form.component.html',
  styleUrls: ['./investment-dialog-form.component.scss']
})
export class InvestmentDialogFormComponent {

  isLoading: boolean = false;
  investmentForm: FormGroup;
  private subscription: Subscription = new Subscription;

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
    const subscription = this.investmentService.saveInvestment(this.investmentForm.value).subscribe({
      next: () => {
        this.isLoading = false,
        this.closeInvestmentDialogForm();
        this.investmentService.setTotalInvestmentSubject();
        this.investmentForm.reset();
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
    console.log('in closeInvestment From');
    this.investmentForm.reset();
    this.dialog.closeAll();
  }

  ngOnDestroy() {

    if (this.subscription) {
      this.subscription.unsubscribe();
    }

  }
}
