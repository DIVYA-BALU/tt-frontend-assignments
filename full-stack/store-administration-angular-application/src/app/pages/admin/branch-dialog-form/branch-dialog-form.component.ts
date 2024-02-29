import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BranchService } from 'src/app/core/services/branch.service';

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
      branchName: ['', [Validators.required]],
      location: ['', Validators.required]
    })
  }
  submit(){
    this.isLoading = true;
  }
  closeBranchDialogForm(){
    this.dialog.closeAll();
  }
}
