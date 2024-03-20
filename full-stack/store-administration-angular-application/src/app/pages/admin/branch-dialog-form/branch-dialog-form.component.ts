import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BranchService } from 'src/app/core/services/branch.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-branch-dialog-form',
  templateUrl: './branch-dialog-form.component.html',
  styleUrls: ['./branch-dialog-form.component.scss']
})

export class BranchDialogFormComponent {

  branchCreationForm: FormGroup;
  isLoading: boolean = false;
  isSaveClicked: boolean = false;
  private subscription: Subscription = new Subscription;

  constructor(private fb: FormBuilder, private branchService: BranchService, private dialog: MatDialog) {
    this.branchCreationForm = this.fb.group({
      name: ['', [Validators.required]],
      location: ['', [Validators.required]]
    })
  }

  submit() {

    this.isSaveClicked = true;
    this.isLoading = true;

    if (this.branchCreationForm.invalid) {
      this.isLoading = false;
      return;
    }

    this.subscription = this.branchService.saveBranch(this.branchCreationForm.value).subscribe({
      next: () => {
        this.isLoading = false;
        this.closeBranchDialogForm();
        this.branchService.setPaginatedBranchesSubject();
        this.branchService.setBranchesSubject();
        Swal.fire('Branch Saved Successfully');
      },
      error: () => {
        this.isLoading = false;
        Swal.fire('Error Occured');
      }
    });

  }

  isSaveButtonClicked() {
    return this.isSaveClicked;
  }

  closeBranchDialogForm() {
    this.dialog.closeAll();
  }

  ngOnDestroy() {

    if (this.subscription) {
      this.subscription.unsubscribe();
    }

  }

}