import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NewsDTO } from 'src/app/model/News';
import { NewsService } from './news.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {

  pendingNews: NewsDTO[] = [];

  displayedColumns: string[] = [
    'newsUid',
    'title',
    'images',
    'content',
    'category',
    'date',
    'approval'
  ];

  dataSource!: MatTableDataSource<NewsDTO>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  status: string = '';

  totalElements: number = 0;
  pageSize: number = 3; 

  constructor(private newsService: NewsService, public dialog: MatDialog, private cdref: ChangeDetectorRef){
    this.dataSource = new MatTableDataSource(this.pendingNews);
  }

  getPendingNews(pageIndex: number, pageSize: number){
    this.newsService.getPendingNews(pageIndex, pageSize).subscribe( (data) => {
      this.pendingNews = data.content;
      this.paginator.length = data.totalElements;
      this.paginator.pageIndex = data.number;
      this.paginator.pageSize = data.size;
      this.dataSource.data = this.pendingNews;
    })
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe((data) => {
      this.getPendingNews(data.pageIndex, data.pageSize);
    })
    this.getPendingNews(0, 3);
    this.cdref.detectChanges();
  }

  nextPage(e: PageEvent) {
    this.getPendingNews(e.pageIndex, e.pageSize);
  }

  onAccept(id: string) {
    this.newsService.onAccept(id).subscribe((data) => {
      console.log(data);
      this.getPendingNews(0, 3);
    });
  }

  onReject(id: string, reason: string) {
    this.newsService.onReject(id, reason).subscribe((data) => {
      console.log(data);
      this.getPendingNews(0, 3);
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
