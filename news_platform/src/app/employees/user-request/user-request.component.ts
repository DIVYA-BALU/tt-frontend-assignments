import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { UserRequestService } from './user-request.service';
import { UserNews } from 'src/app/model/UserNews';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-user-request',
  templateUrl: './user-request.component.html',
  styleUrls: ['./user-request.component.scss'],
})
export class UserRequestComponent {
  usernews: UserNews[] = [];

  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'phoneNo',
    'images',
    'date',
    'content',
    'status',
    'approval',
  ];

  dataSource!: MatTableDataSource<UserNews>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  status: string = '';

  totalElements: number = 0;
  pageSize: number = 3;

  constructor(
    private userRequestService: UserRequestService,
    public dialog: MatDialog,
    private cdref: ChangeDetectorRef
  ) {
    this.dataSource = new MatTableDataSource(this.usernews);
    this.getNews(0, 3);
  }

  getNews(pageIndex: number, pageSize: number) {
    this.userRequestService
      .getUserNews(pageIndex, pageSize)
      .subscribe((data) => {
        this.usernews = data.content;
        this.paginator.length = data.totalElements;
        this.paginator.pageIndex = data.number;
        this.paginator.pageSize = data.size;
        this.dataSource.data = this.usernews;
        console.log(data.content);
        
      });
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe((data) => {
      this.getNews(data.pageIndex, data.pageSize);
    });
    this.getNews(0, 3);
    this.cdref.detectChanges();
  }

  nextPage(e: PageEvent) {
    this.getNews(e.pageIndex, e.pageSize);
  }

  onAccept(id: string) {
    this.userRequestService.onAccept(id).subscribe((data) => {
      console.log(data);
      this.getNews(0, 3);
    });
  }

  onReject(id: string, reason: string) {
    this.userRequestService.onReject(id, reason).subscribe((data) => {
      console.log(data);
      this.getNews(0, 3);
    });
  }

  openDialog(id: string): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      data: {
        id: id,
        reason: '',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onReject(result.id, result.reason);
      }
    });
  }
}
