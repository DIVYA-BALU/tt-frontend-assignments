import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Article } from 'src/app/model/Article';
import { ArticleService } from './article.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { Subscription } from 'rxjs';
import { ContentDialogDataComponent } from '../content-dialog-data/content-dialog-data.component';
import Swal from 'sweetalert2';
import { DialogueImageComponent } from '../dialogue-image/dialogue-image.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnDestroy {
  subscriptions: Subscription[] = [];
  pendingArticle: Article[] = [];

  displayedColumns: string[] = [
    'articleUid',
    'title',
    'images',
    'content',
    'category',
    'date',
    'approval',
  ];

  dataSource!: MatTableDataSource<Article>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  status: string = '';

  totalElements: number = 0;
  pageSize: number = 3;

  constructor(
    private articleService: ArticleService,
    public dialog: MatDialog,
    private cdref: ChangeDetectorRef
  ) {
    this.dataSource = new MatTableDataSource(this.pendingArticle);
  }

  getPendingArticle(pageIndex: number, pageSize: number) {
    this.subscriptions.push(
      this.articleService
        .getPendingArticle(pageIndex, pageSize)
        .subscribe((data) => {
          this.pendingArticle = data.content;
          this.paginator.length = data.totalElements;
          this.paginator.pageIndex = data.number;
          this.paginator.pageSize = data.size;
          this.dataSource.data = this.pendingArticle;
        })
    );
  }

  ngAfterViewInit() {
    this.subscriptions.push(
      this.paginator.page.subscribe((data) => {
        this.getPendingArticle(data.pageIndex, data.pageSize);
      })
    );
    this.getPendingArticle(0, 3);
    this.cdref.detectChanges();
  }

  nextPage(e: PageEvent) {
    this.getPendingArticle(e.pageIndex, e.pageSize);
  }

  onAccept(id: string) {
    this.subscriptions.push(
      this.articleService.onAccept(id).subscribe((data) => {
        Swal.fire({
          title: 'Great Job!',
          text: 'Your action has been completed!',
          icon: 'success',
        });
        this.getPendingArticle(0, 3);
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
      this.articleService.onReject(id, reason).subscribe((data) => {
        Swal.fire({
          title: 'Great Job!',
          text: 'Your action has been completed!',
          icon: 'success',
        });
        this.getPendingArticle(0, 3);
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
