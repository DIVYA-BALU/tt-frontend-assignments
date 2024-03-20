import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NewsDTO } from 'src/app/model/NewDTO';
import { NewsService } from './news.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { Subscription } from 'rxjs';
import { ContentDialogDataComponent } from '../content-dialog-data/content-dialog-data.component';
import Swal from 'sweetalert2';
import { DialogueImageComponent } from '../dialogue-image/dialogue-image.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnDestroy {
  subscriptions: Subscription[] = [];
  pendingNews: NewsDTO[] = [];

  displayedColumns: string[] = [
    'newsUid',
    'title',
    'synopsis',
    'images',
    'content',
    'category',
    'date',
    'approval',
  ];

  dataSource!: MatTableDataSource<NewsDTO>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  status: string = '';

  totalElements: number = 0;
  pageSize: number = 3;

  constructor(
    private newsService: NewsService,
    public dialog: MatDialog,
    private cdref: ChangeDetectorRef
  ) {
    this.dataSource = new MatTableDataSource(this.pendingNews);
  }

  getPendingNews(pageIndex: number, pageSize: number) {
    this.subscriptions.push(
      this.newsService.getPendingNews(pageIndex, pageSize).subscribe((data) => {
        this.pendingNews = data.content;
        this.paginator.length = data.totalElements;
        this.paginator.pageIndex = data.number;
        this.paginator.pageSize = data.size;
        this.dataSource.data = this.pendingNews;
      })
    );
  }

  ngAfterViewInit() {
    this.subscriptions.push(
      this.paginator.page.subscribe((data) => {
        this.getPendingNews(data.pageIndex, data.pageSize);
      })
    );
    this.getPendingNews(0, 3);
    this.cdref.detectChanges();
  }

  nextPage(e: PageEvent) {
    this.getPendingNews(e.pageIndex, e.pageSize);
  }

  onAccept(id: string) {
    this.subscriptions.push(
      this.newsService.onAccept(id).subscribe((data) => {
        Swal.fire({
          title: 'Great Job!',
          text: 'Your action has been completed!',
          icon: 'success',
        });
        this.getPendingNews(0, 3);
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      })
    );
  }

  onReject(id: string, reason: string) {
    this.subscriptions.push(
      this.newsService.onReject(id, reason).subscribe((data) => {
        Swal.fire({
          title: 'Great Job!',
          text: 'Your action has been completed!',
          icon: 'success',
        });
        this.getPendingNews(0, 3);
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      })
    );
  }

  openDialog(id: string): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      data: {
        id: id,
        reason: '',
      },
    });

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.onReject(result.id, result.reason);
        }
      })
    );
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
