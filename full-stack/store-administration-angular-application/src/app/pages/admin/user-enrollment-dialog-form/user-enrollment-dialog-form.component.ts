import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth.service';
import { PopUpComponent } from '../../pop-up/pop-up.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Branch } from 'src/app/core/models/API.model';
import { BranchService } from 'src/app/core/services/branch.service';
import { UserDetailsService } from 'src/app/core/services/user-details.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-enrollment-dialog-form',
  templateUrl: './user-enrollment-dialog-form.component.html',
  styleUrls: ['./user-enrollment-dialog-form.component.scss']
})
export class UserEnrollmentDialogFormComponent {
  isLoading: boolean = false;
  isSaveClicked: boolean = false;
  enrollUserForm: FormGroup;
  branches: Branch[] = [];
  roles: string[] = ['Employee', 'Manager'];

  private branchesSubscription: Subscription = new Subscription;
  private enrollUserSubscription: Subscription = new Subscription;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private branchService: BranchService,
    private dialog: MatDialog,
    private userDetailsService: UserDetailsService) {
    this.enrollUserForm = this.fb.group({
      emailId: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.maxLength(15)]],
      password: ['', Validators.required],
      branchId: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getAllBranches();
  }

  getAllBranches() {
    this.branchesSubscription = this.branchService.getAllBranches().subscribe({
      next: (branches) => this.branches = branches,
      error: () => {
        Swal.fire('Section Saved Successfuly');
      }
    })
  }

  submit() {

    this.isLoading = true;
    this.isSaveClicked = true;

    if(this.enrollUserForm.invalid)
    {
      this.isLoading = false;
      return;
    }

    this.enrollUserSubscription = this.authService.enrollUser(this.enrollUserForm.value).subscribe({
      next: () => {
        this.isLoading = false;
        this.userDetailsService.setPaginatedUsersSubject();
        this.dialog.open(PopUpComponent, {
          data: {
            message: `${this.enrollUserForm.value.role} added successfully`
          },
        });
        this.enrollUserForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        this.isLoading = false;

        if (error.status === 406) {
          Swal.fire('Email Id Already Exists');
        }
        else {
          Swal.fire('Error Occured');
        }

      }
    });
  }

  closeEnrollUserForm() {
    this.dialog.closeAll();
  }

  ngOnDestroy() {
    if (this.branchesSubscription) {
      this.branchesSubscription.unsubscribe();
    }
    if (this.enrollUserSubscription) {
      this.enrollUserSubscription.unsubscribe();
    }
  }

}
