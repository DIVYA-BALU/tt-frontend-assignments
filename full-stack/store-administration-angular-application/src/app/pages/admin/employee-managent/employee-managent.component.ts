import { Component, OnInit } from '@angular/core';
import { UserEnrollmentDialogFormComponent } from '../user-enrollment-dialog-form/user-enrollment-dialog-form.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Branch, UserDetails } from 'src/app/core/models/API.model';
import { UserDetailsService } from 'src/app/core/services/user-details.service';
import { PageEvent } from '@angular/material/paginator';
import { BranchService } from 'src/app/core/services/branch.service';
import { UserUpdateFormComponent } from '../user-update-form/user-update-form.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-managent',
  templateUrl: './employee-managent.component.html',
  styleUrls: ['./employee-managent.component.scss']
})
export class EmployeeManagentComponent implements OnInit {
  displayedColumns: string[] = ['Serial Number', 'User Name', 'EmailId', 'Role', 'Joining Date', 'Update User'];
  pageNumber: number = 0;
  pageSize: number = 10;
  totalUsers: number = 0;
  dataSource: MatTableDataSource<UserDetails>;
  branches: Branch[] = [];
  branchId: string = '';
  searchByName: string = '';

  private subscription: Subscription = new Subscription;
  private loginResponseSubscription: Subscription = new Subscription;
  private branchesSubscription: Subscription = new Subscription;
  private usersSubscription: Subscription = new Subscription;

  constructor(private dialog: MatDialog, private userDetailsService: UserDetailsService, private branchService: BranchService) {
    this.dataSource = new MatTableDataSource<UserDetails>;
  }

  ngOnInit(): void {
    this.getAllBranches();

    const subscription = this.userDetailsService.loginResponseSubject$.subscribe({
      next: (loginResponse) => {

        if (loginResponse.role.name === 'ADMIN') {
          this.userDetailsService.setPaginatedUsersSubject(this.pageNumber, this.pageSize, this.branchId, this.searchByName);
          this.getUserDetails();
        }

      }
    })
  }

  getAllBranches() {
    const branchesSubscription = this.branchService.getAllBranches().subscribe({
      next: (branches) => this.branches = branches,
      error: (HttpErrorResponse) => {
        alert('Error Occured Retry Later');
      }
    })
  }

  getUserDetails() {
    const usersSubscription = this.userDetailsService.paginatedUsers$.subscribe({
      next: (paginatedUsers) => {
        this.dataSource.data = paginatedUsers.content;
        this.totalUsers = paginatedUsers.totalElements;
      }
    })
  }

  openEnrollUserForm() {
    this.dialog.open(UserEnrollmentDialogFormComponent, { disableClose: true });
  }

  onPageChange(event: PageEvent): void {
    this.pageNumber = event.pageIndex;
    this.pageSize = event.pageSize;
    this.userDetailsService.setPaginatedUsersSubject(this.pageNumber, this.pageSize, this.branchId, this.searchByName);
  }

  onSearchFilterChange() {
    this.getUserDetails();
    const loginResponseSubscription = this.userDetailsService.loginResponseSubject$.subscribe({
      next: (loginResponse) => {

        if (loginResponse.role.name === 'ADMIN')
          this.userDetailsService.setPaginatedUsersSubject(this.pageNumber, this.pageSize, this.branchId, this.searchByName);
        else {
          if (this.branchId !== '')
            this.userDetailsService.setPaginatedUsersSubject(this.pageNumber, this.pageSize, this.branchId, this.searchByName);
        }

      }
    })
  }

  update(userDetails: UserDetails) {
    this.dialog.open(UserUpdateFormComponent, {
      disableClose: true,
      data: userDetails
    });
  }

  ngOnDestroy() {

    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.loginResponseSubscription) {
      this.loginResponseSubscription.unsubscribe();
    }
    if (this.branchesSubscription) {
      this.branchesSubscription.unsubscribe();
    }
    if (this.usersSubscription) {
      this.usersSubscription.unsubscribe();
    }
  }

}
