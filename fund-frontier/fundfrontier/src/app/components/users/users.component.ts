import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  users: User[] = [];
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'email',
    'role'
  ]

  dataSource!: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator!: MatPaginator

  constructor(private userService: UserService, private cdref: ChangeDetectorRef) {
    this.dataSource = new MatTableDataSource(this.users)
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe(
      (data) => {
        this.getAllUsers(data.pageIndex, data.pageSize);
      }
    )
    this.getAllUsers(0, 3);
    this.cdref.detectChanges();

  }

  nextPage(e: PageEvent) {
    this.getAllUsers(e.pageIndex, e.pageSize);
  }


  getAllUsers(pageIndex: number, pageSize: number) {
    this.userService.getAllUsers(pageIndex, pageSize).subscribe(
      (data) => {
        this.users = data.content;
        this.paginator.length = data.totalElements;
        this.paginator.pageIndex = data.number;
        this.paginator.pageSize = data.size;
        this.dataSource.data = this.users;
      }
    )
  }

}
