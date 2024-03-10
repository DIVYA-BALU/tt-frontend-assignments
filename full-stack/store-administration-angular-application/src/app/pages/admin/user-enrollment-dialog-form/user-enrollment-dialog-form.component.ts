import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { PopUpComponent } from '../../pop-up/pop-up.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Branch } from 'src/app/core/models/API.model';
import { BranchService } from 'src/app/core/services/branch.service';
import { UserDetailsService } from 'src/app/core/services/user-details.service';

@Component({
  selector: 'app-user-enrollment-dialog-form',
  templateUrl: './user-enrollment-dialog-form.component.html',
  styleUrls: ['./user-enrollment-dialog-form.component.scss']
})
export class UserEnrollmentDialogFormComponent {
  isLoading: boolean = false;
  enrollUserForm: FormGroup;
  branches: Branch[] = [];
  roles: string[] = ['Employee', 'Manager'];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private branchService: BranchService,
    private router: Router,
    private dialog: MatDialog,
    private userDetailsService: UserDetailsService) {
    this.enrollUserForm = this.fb.group({
      emailId: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.maxLength(15)]],
      password: ['', Validators.required],
      branchId: [null, Validators.required],
      role: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getAllBranches();
  }

  getAllBranches() {
    this.branchService.getAllBranches().subscribe({
      next: (branches) => this.branches = branches,
      error: (HttpErrorResponse) => {
        alert('Error Occured Retry Later');
      }
    })
  }

  submit() {
    this.isLoading = true;
    this.authService.enrollUser(this.enrollUserForm.value).subscribe({
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
          this.dialog.open(PopUpComponent, {
            data: {
              message: `Email Id Already exists`
            },
          });
        }
        else {
          this.dialog.open(PopUpComponent, {
            data: {
              message: `${error.status} found`
            },
          });
        }

      }
    });
  }

  closeEnrollUserForm() {
    this.dialog.closeAll();
  }
}
