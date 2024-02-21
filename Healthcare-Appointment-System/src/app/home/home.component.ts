import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router, public dialog: MatDialog) { }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(LoginComponent);
  //   dialogRef.afterClosed().subscribe(() => {
  //     console.log('The dialog was closed');
  //   });
  // }
  login() {
    this.router.navigate(['login']);
  }
}
