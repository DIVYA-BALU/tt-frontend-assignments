import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BranchService } from 'src/app/core/services/branch.service';
import { PopUpComponent } from '../../pop-up/pop-up.component';

@Component({
  selector: 'app-branch-dialog-form',
  templateUrl: './branch-dialog-form.component.html',
  styleUrls: ['./branch-dialog-form.component.scss']
})

export class BranchDialogFormComponent {

  branchCreationForm: FormGroup;
  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private branchService: BranchService, private dialog: MatDialog) {
    this.branchCreationForm = this.fb.group({
      name: ['', [Validators.required]],
      location: ['', Validators.required]
    })
  }

  submit() {
    this.isLoading = true;
    this.branchService.saveBranch(this.branchCreationForm.value).subscribe({
      next: () => {
        this.isLoading = false;
        this.closeBranchDialogForm();
        this.branchService.setPaginatedBranchesSubject();
        this.dialog.open(PopUpComponent, {
          data: {
            message: 'Branch Saved Successfully',
          },
        });
      },
      error: (HttpErrorResponse) => {
        this.isLoading = false;
        this.dialog.open(PopUpComponent, {
          data: {
            message: 'Error occured',
          },
        });
      }
    })
  }

  closeBranchDialogForm() {
    this.dialog.closeAll();
  }
}
