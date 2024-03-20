import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { RejectNewsService } from './reject-news.service';
import { MatTableDataSource } from '@angular/material/table';
import { NewsDTO } from 'src/app/model/NewDTO';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ContentDialogDataComponent } from '../content-dialog-data/content-dialog-data.component';
import { DialogueImageComponent } from '../dialogue-image/dialogue-image.component';

@Component({
  selector: 'app-reject-news',
  templateUrl: './reject-news.component.html',
  styleUrls: ['./reject-news.component.scss'],
})
export class RejectNewsComponent implements OnDestroy {
  subscriptions: Subscription[] = [];
  rejectedNews: NewsDTO[] = [];

  displayedColumns: string[] = [
    'newsUid',
    'title',
    'images',
    'content',
    'category',
    'date',
    'reason',
  ];

  dataSource!: MatTableDataSource<NewsDTO>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  status: string = '';

  totalElements: number = 0;
  pageSize: number = 3;

  constructor(
    private rejectedNewsService: RejectNewsService,
    public dialog: MatDialog,
    private cdref: ChangeDetectorRef
  ) {
    this.dataSource = new MatTableDataSource(this.rejectedNews);
  }

  getRejectedNews(pageIndex: number, pageSize: number) {
    this.subscriptions.push(
      this.rejectedNewsService
        .getRejectedNews(pageIndex, pageSize)
        .subscribe((data) => {
          this.rejectedNews = data.content;
          this.paginator.length = data.totalElements;
          this.paginator.pageIndex = data.number;
          this.paginator.pageSize = data.size;
          this.dataSource.data = this.rejectedNews;
        })
    );
  }

  ngAfterViewInit() {
    this.subscriptions.push(
      this.paginator.page.subscribe((data) => {
        this.getRejectedNews(data.pageIndex, data.pageSize);
      })
    );
    this.getRejectedNews(0, 3);
    this.cdref.detectChanges();
  }

  nextPage(e: PageEvent) {
    this.getRejectedNews(e.pageIndex, e.pageSize);
  }

  openDialog1(content: string){
    this.dialog.open(ContentDialogDataComponent, {
      data: {
        content: content
      }      
    });
  }

  openDialog2(images: string){
    this.dialog.open(DialogueImageComponent, {
      data: {
        images: images
      }      
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((data) => {
      data.unsubscribe();
    });
  }
}
