import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BranchService } from 'src/app/core/services/branch.service';
import { BranchDialogFormComponent } from '../branch-dialog-form/branch-dialog-form.component';

@Component({
  selector: 'app-branch-layout',
  templateUrl: './branch-layout.component.html',
  styleUrls: ['./branch-layout.component.scss']
})
export class BranchLayoutComponent {
  displayedColumns: string[] = ['Branch Name', 'Location', 'Created Date'];
  pageNumber: number = 0;
  pageSize: number = 10;
  totalBranches: number = 0;
  dataSource: MatTableDataSource<null>;
  
  constructor(private fb: FormBuilder, private branchService: BranchService, private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<null>;
  }

  onPageChange(event: PageEvent): void {
    this.pageNumber = event.pageIndex;
    this.pageSize = event.pageSize;
    //this.getEventDetails();
  }

  openBranchDialogForm() {
    const dialogRef = this.dialog.open(BranchDialogFormComponent, { disableClose: true });
  }
}
