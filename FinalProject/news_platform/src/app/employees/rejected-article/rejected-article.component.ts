import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Article } from 'src/app/model/Article';
import { RejectedArticleService } from './rejected-article.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-rejected-article',
  templateUrl: './rejected-article.component.html',
  styleUrls: ['./rejected-article.component.scss']
})
export class RejectedArticleComponent {

  rejectedArticle: Article[] = [];

  displayedColumns: string[] = [
    'articleUid',
    'title',
    'category',
    'images',
    'content',
    'date',
    'reason'
  ];

  dataSource!: MatTableDataSource<Article>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  status: string = '';

  totalElements: number = 0;
  pageSize: number = 3; 

  constructor(private rejectedArticleService: RejectedArticleService, public dialog: MatDialog, private cdref: ChangeDetectorRef){
    this.dataSource = new MatTableDataSource(this.rejectedArticle);
  }

  getRejectedArticle(pageIndex: number, pageSize: number){
    this.rejectedArticleService.getRejectedArticle(pageIndex, pageSize).subscribe( (data) => {
      this.rejectedArticle = data.content;
      this.paginator.length = data.totalElements;
      this.paginator.pageIndex = data.number;
      this.paginator.pageSize = data.size;
      this.dataSource.data = this.rejectedArticle;
    })
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe((data) => {
      this.getRejectedArticle(data.pageIndex, data.pageSize);
    })
    this.getRejectedArticle(0, 3);
    this.cdref.detectChanges();
  }

  nextPage(e: PageEvent) {
    this.getRejectedArticle(e.pageIndex, e.pageSize);
  }
}
