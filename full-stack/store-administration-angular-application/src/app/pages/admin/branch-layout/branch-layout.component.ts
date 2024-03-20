import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BranchService } from 'src/app/core/services/branch.service';
import { BranchDialogFormComponent } from '../branch-dialog-form/branch-dialog-form.component';
import { Branch } from 'src/app/core/models/API.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-branch-layout',
  templateUrl: './branch-layout.component.html',
  styleUrls: ['./branch-layout.component.scss']
})
export class BranchLayoutComponent implements OnInit {
  displayedColumns: string[] = ['Serial Number', 'Branch Name', 'Location', 'Created Date'];
  pageNumber: number = 0;
  pageSize: number = 10;
  totalBranches: number = 0;
  dataSource: MatTableDataSource<Branch>;
  private branchSubscription: Subscription = new Subscription;

  constructor(private branchService: BranchService, private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<Branch>;
  }

  ngOnInit(): void {
    this.branchService.setPaginatedBranchesSubject();
    this.getBranchDetails();
  }

  getBranchDetails() {
    this.branchSubscription = this.branchService.paginatedBranches$.subscribe({
      next: (paginatedBranches) => {
        this.totalBranches = paginatedBranches.totalElements;
        this.dataSource.data = paginatedBranches.content;
      }
    })
  }

  onPageChange(event: PageEvent): void {
    this.pageNumber = event.pageIndex;
    this.pageSize = event.pageSize;
    this.branchService.setPaginatedBranchesSubject(this.pageNumber, this.pageSize);
    this.getBranchDetails();
  }
  
  openBranchDialogForm() {
    this.dialog.open(BranchDialogFormComponent, { disableClose: true });
  }

  ngOnDestroy() {

    if (this.branchSubscription) {
      this.branchSubscription.unsubscribe();
    }

    this.branchService.unSubscribeAll();
    
  }

}
