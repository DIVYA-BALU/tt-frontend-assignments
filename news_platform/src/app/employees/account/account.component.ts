import { Component, Inject, ViewChild } from '@angular/core';
import { CreateAccountService } from './account.service';

import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { User } from 'src/app/model/User';
import { UserDTO } from 'src/app/model/UserDTO';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SuccessSnackBarComponent } from 'src/app/success-snack-bar/success-snack-bar.component';
import { FailureSnackBarComponent } from 'src/app/failure-snack-bar/failure-snack-bar.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {
  durationInSeconds: number = 5;
  users: User[] = [];

  filterControl = new FormControl('');

  displayedColumns: string[] = [
    'firstname',
    'email',
    'role',
    'permission',
    'add permission',
  ];
  dataSource!: MatTableDataSource<User>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  status: string = '';

  totalElements: number = 0;
  pageSize: number = 3;  

  constructor(
    private accountService: CreateAccountService,
    public dialog: MatDialog, private cdref: ChangeDetectorRef, private _snackBar: MatSnackBar
  ) {
    this.dataSource = new MatTableDataSource(this.users);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {
        firstName: '',
        email: '',
        phoneNo: '',
        password: '',
        role: '',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.createUser(result);
      this.getUsers(0, 3);
    });
  }

  getUsers(pageIndex: number, pageSize: number) {
    this.accountService
      .getAllUsers(pageIndex, pageSize)
      .subscribe((data) => {
        this.users = data.content;
        this.paginator.length = data.totalElements;
        this.paginator.pageIndex = data.number;
        this.paginator.pageSize = data.size;
        this.dataSource.data = this.users;
      });
  }

  createUser(user: UserDTO){
    this.accountService.createAccount(user).subscribe( (data) => {
      this.status = data;
      this.openSuccessSnackBar();
    },
    (error) => {
      this.status = error.error;
      this.openFailureSnackBar();
    })
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe((data) => {
      this.getUsers(data.pageIndex, data.pageSize);
    })
    this.getUsers(0, 3);
    this.cdref.detectChanges();
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  nextPage(e: PageEvent) {
    this.getUsers(e.pageIndex, e.pageSize);
  }

  openSuccessSnackBar() {
    this._snackBar.openFromComponent(SuccessSnackBarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  openFailureSnackBar() {
    this._snackBar.openFromComponent(FailureSnackBarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  styleUrls: ['dialog-overview-example-dialog.scss'],
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: UserDTO
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
