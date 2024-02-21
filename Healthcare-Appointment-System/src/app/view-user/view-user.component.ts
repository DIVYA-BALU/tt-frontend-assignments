import { Component } from '@angular/core';
import { UserService } from './view-user.service';
import { DataService } from '../service/data.service';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-appointment',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css'],
})
export class ViewUserComponent {

  users: any = '';
  constructor(private userService: UserService, private data: DataService,
    public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.listUsers();
  }


  sendDetails(data: any) {
    this.data.changeMessage(data);
  }

  openDialog(details: any) {
    const dialog = this.dialog.open(ProfileComponent, {
      data: details,
      height: '500px',
      width: '700px',
    }
    )
  }

  currentPage: number = 0;
  pageSize: number = 6;
  lastpage = false;

  listUsers(): void {
    this.userService.getItems(this.currentPage, this.pageSize)
      .subscribe(response => {
        this.users = response.content;
        if (this.users.length < this.pageSize)
          this.lastpage = true;
        else
          this.lastpage = false;
      });
  }

  nextPage(): void {
    this.currentPage++;
    this.listUsers();
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.listUsers();
    }
  }
}
