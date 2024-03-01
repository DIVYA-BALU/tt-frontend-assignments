import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BranchService } from 'src/app/core/services/branch.service';
import { BranchDialogFormComponent } from '../branch-dialog-form/branch-dialog-form.component';
import { Branch, PaginatedResponse } from 'src/app/core/models/API.model';

@Component({
  selector: 'app-branch-layout',
  templateUrl: './branch-layout.component.html',
  styleUrls: ['./branch-layout.component.scss']
})
export class BranchLayoutComponent implements OnInit {
  displayedColumns: string[] = ['Branch Name', 'Location', 'Created Date'];
  pageNumber: number = 0;
  pageSize: number = 10;
  totalBranches: number = 0;
  dataSource: MatTableDataSource<Branch>;
  
  constructor(private branchService: BranchService, private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<Branch>;
  }
  ngOnInit(): void {
    this.getBranchDetails();
  }

  getBranchDetails(){
    this.branchService.getPaginationBranches().subscribe({
      next: (paginationBranches) => {
        this.dataSource.data = paginationBranches.content;
      }
    })
  }
  
  openBranchDialogForm() {
    const dialogRef = this.dialog.open(BranchDialogFormComponent, { disableClose: true });
  }

  addBranchSection(branchId: string, sectionId: string) {
    this.branchService.addSection(branchId, sectionId).subscribe({
      error: (HttpErrorResponse) => {
        alert('Error Occured Retry Later');
      }
    })
  }

  onPageChange(event: PageEvent): void {
    this.pageNumber = event.pageIndex;
    this.pageSize = event.pageSize;
    //this.getEventDetails();
  }
}
