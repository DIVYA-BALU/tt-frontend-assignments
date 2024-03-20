import { Component, Inject, OnDestroy, ViewChild } from '@angular/core';
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
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnDestroy {
  durationInSeconds: number = 5;
  users: User[] = [];

  subscriptions: Subscription[] = [];

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
    public dialog: MatDialog,
    private cdref: ChangeDetectorRef
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

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((result) => {
        this.createUser(result);
        this.getUsers(0, 3);
      })
    );
  }

  getUsers(pageIndex: number, pageSize: number) {
    this.subscriptions.push(
      this.accountService.getAllUsers(pageIndex, pageSize).subscribe((data) => {
        this.users = data.content;
        this.paginator.length = data.totalElements;
        this.paginator.pageIndex = data.number;
        this.paginator.pageSize = data.size;
        this.dataSource.data = this.users;
      })
    );
  }

  createUser(user: UserDTO) {
    this.subscriptions.push(
      this.accountService.createAccount(user).subscribe(
        (data) => {
          this.status = data;
        },
        (error) => {
          this.status = error.error;
        }
      )
    );
  }

  ngAfterViewInit() {
    this.subscriptions.push(
      this.paginator.page.subscribe((data) => {
        this.getUsers(data.pageIndex, data.pageSize);
      })
    );
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

  ngOnDestroy(): void {
    this.subscriptions.forEach((data) => {
      data.unsubscribe();
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
