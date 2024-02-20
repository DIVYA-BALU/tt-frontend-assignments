import { Component, ViewChild } from '@angular/core';
import { User } from '../model/user.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { UserService } from '../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UpdateuserComponent } from '../updateuser/updateuser.component';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  editPermission!: boolean;
  addPermission!: boolean;
  deletePermission!: boolean;

  deleteProduct(arg0: any) {
    throw new Error('Method not implemented.');
  }

  users: User[] = [];
  displayedColumns: string[] = [
    'id',
    'firstname',
    'lastname',
    'email',
    'actions',
  ];
  dataSource = new MatTableDataSource<User>(this.users);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private userService: UserService,
    public dialog: MatDialog,
    private router: Router,
    private loginService: LoginService
  ) {
    this.getUsers();
  }

  ngOnInit() {
    this.loginService.findPermissions().subscribe((data) => {
      this.editPermission = data.includes('user_put');
      console.log(this.editPermission);
    });

    this.loginService.findPermissions().subscribe((data) => {
      this.addPermission = data.includes('user_post');
      console.log(this.addPermission);
    });

    this.loginService.findPermissions().subscribe((data) => {
      this.deletePermission = data.includes('user_delete');
      console.log(this.deletePermission);
    });
  }

  getUsers() {
    this.userService.getAllUsers().subscribe((data: User[]) => {
      this.users = data;
      this.dataSource.data = this.users;
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  register() {
    this.router.navigate(['dashboard/register']);
    this.getUsers();
  }

  openEditUserDialog(user: User) {
    const dialogRef = this.dialog.open(UpdateuserComponent, {
      width: '500px',
      data: user,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getUsers();
    });
  }
}
