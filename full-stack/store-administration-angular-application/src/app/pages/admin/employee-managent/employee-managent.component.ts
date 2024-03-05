import { Component, OnInit } from '@angular/core';
import { UserEnrollmentDialogFormComponent } from '../user-enrollment-dialog-form/user-enrollment-dialog-form.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Branch, UserDetails } from 'src/app/core/models/API.model';
import { UserDetailsService } from 'src/app/core/services/user-details.service';
import { PageEvent } from '@angular/material/paginator';
import { BranchService } from 'src/app/core/services/branch.service';

@Component({
  selector: 'app-employee-managent',
  templateUrl: './employee-managent.component.html',
  styleUrls: ['./employee-managent.component.scss']
})
export class EmployeeManagentComponent implements OnInit {
  displayedColumns: string[] = ['Serial Number', 'User Name', 'EmailId', 'Role', 'Joining Date'];
  pageNumber: number = 0;
  pageSize: number = 10;
  totalUsers: number = 0;
  dataSource: MatTableDataSource<UserDetails>;
  branches: Branch[] = [];
  branchId: string = '';

  constructor(private dialog: MatDialog, private userDetailsService: UserDetailsService, private branchService: BranchService) {
    this.dataSource = new MatTableDataSource<UserDetails>;
  }

  ngOnInit(): void {
    this.getAllBranches();
    // this.userDetailsService.setPaginatedUsersSubject('', this.pageNumber, this.pageSize);
   this.getUserDetails();
  }

  getAllBranches() {
    this.branchService.getAllBranches().subscribe({
      next: (branches) => this.branches = branches,
      error: (HttpErrorResponse) => {
        alert('Error Occured Retry Later');
      }
    })
  }

  getUserDetails() {
    this.userDetailsService.paginatedUsers$.subscribe({
      next: (paginatedUsers) => {
        this.dataSource.data = paginatedUsers.content;
      }
    })
  }

  openEnrollUserForm() {
    const dialogRef = this.dialog.open(UserEnrollmentDialogFormComponent, { disableClose: true });
  }

  onPageChange(event: PageEvent): void {
    this.pageNumber = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getUserDetails();
  }
  
  onBranchDropdownChange(event: Event){
    this.userDetailsService.setPaginatedUsersSubject(this.branchId, this.pageNumber, this.pageSize);
    this.getUserDetails();
  }
}
