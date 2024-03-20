import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { UserRequestService } from './user-request.service';
import { UserNews } from 'src/app/model/UserNews';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { Subscription } from 'rxjs';
import { DialogDataExampleDialog } from '../account/account.component';
import { ContentDialogDataComponent } from '../content-dialog-data/content-dialog-data.component';
import Swal from 'sweetalert2';
import { DialogueImageComponent } from '../dialogue-image/dialogue-image.component';

@Component({
  selector: 'app-user-request',
  templateUrl: './user-request.component.html',
  styleUrls: ['./user-request.component.scss'],
})
export class UserRequestComponent implements OnDestroy {
  subscriptions: Subscription[] = [];
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
    this.subscriptions.push(
      this.userRequestService
        .getUserNews(pageIndex, pageSize)
        .subscribe((data) => {
          this.usernews = data.content;
          this.paginator.length = data.totalElements;
          this.paginator.pageIndex = data.number;
          this.paginator.pageSize = data.size;
          this.dataSource.data = this.usernews;
        })
    );
  }

  ngAfterViewInit() {
    this.subscriptions.push(
      this.paginator.page.subscribe((data) => {
        this.getNews(data.pageIndex, data.pageSize);
      })
    );
    this.getNews(0, 3);
    this.cdref.detectChanges();
  }

  nextPage(e: PageEvent) {
    this.getNews(e.pageIndex, e.pageSize);
  }

  onAccept(id: string) {
    this.subscriptions.push(
      this.userRequestService.onAccept(id).subscribe((data) => {
        Swal.fire({
          title: 'Great Job!',
          text: 'Your action has been completed!',
          icon: 'success',
        });
        this.getNews(0, 3);
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
      this.userRequestService.onReject(id, reason).subscribe((data) => {
        Swal.fire({
          title: 'Great Job!',
          text: 'Your action has been completed!',
          icon: 'success',
        });
        this.getNews(0, 3);
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

  ngOnDestroy(): void {
    this.subscriptions.forEach((data) => {
      data.unsubscribe();
    });
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
}
