import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserNews } from 'src/app/model/UserNews';
import { UserNewsService } from './user-news.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-news',
  templateUrl: './user-news.component.html',
  styleUrls: ['./user-news.component.scss']
})
export class UserNewsComponent {

  usernews: UserNews[] = [];

  displayedColumns: string[] = [
    'id',
    'images',
    'date',
    'content',
    'status'
  ];

  dataSource!: MatTableDataSource<UserNews>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  status: string = '';

  totalElements: number = 0;
  pageSize: number = 3;

  constructor(
    private userNewsService: UserNewsService,
    public dialog: MatDialog,
    private cdref: ChangeDetectorRef
  ) {
    this.dataSource = new MatTableDataSource(this.usernews);
    this.getNews(0, 3);
  }

  getNews(pageIndex: number, pageSize: number) {
    this.userNewsService
      .getUserNews(pageIndex, pageSize)
      .subscribe((data) => {
        this.usernews = data.content;
        this.paginator.length = data.totalElements;
        this.paginator.pageIndex = data.number;
        this.paginator.pageSize = data.size;
        this.dataSource.data = this.usernews;
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
}
