import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ShortReads } from 'src/app/model/ShortReads';
import { ShortReadsService } from './short-reads.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { Subscription } from 'rxjs';
import { ContentDialogDataComponent } from '../content-dialog-data/content-dialog-data.component';
import Swal from 'sweetalert2';
import { DialogueImageComponent } from '../dialogue-image/dialogue-image.component';

@Component({
  selector: 'app-short-reads',
  templateUrl: './short-reads.component.html',
  styleUrls: ['./short-reads.component.scss'],
})
export class ShortReadsComponent implements OnDestroy {
  subscriptions: Subscription[] = [];
  pendingShortReads: ShortReads[] = [];

  displayedColumns: string[] = [
    'shortReadsUid',
    'title',
    'images',
    'content',
    'category',
    'date',
    'approval',
  ];

  dataSource!: MatTableDataSource<ShortReads>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  status: string = '';

  totalElements: number = 0;
  pageSize: number = 3;

  constructor(
    private shortReadsService: ShortReadsService,
    public dialog: MatDialog,
    private cdref: ChangeDetectorRef
  ) {
    this.dataSource = new MatTableDataSource(this.pendingShortReads);
  }

  getPendingShortReads(pageIndex: number, pageSize: number) {
    this.subscriptions.push(
      this.shortReadsService
        .getPendingShortReads(pageIndex, pageSize)
        .subscribe((data) => {
          this.pendingShortReads = data.content;
          this.paginator.length = data.totalElements;
          this.paginator.pageIndex = data.number;
          this.paginator.pageSize = data.size;
          this.dataSource.data = this.pendingShortReads;
        })
    );
  }

  ngAfterViewInit() {
    this.subscriptions.push(
      this.paginator.page.subscribe((data) => {
        this.getPendingShortReads(data.pageIndex, data.pageSize);
      })
    );
    this.getPendingShortReads(0, 3);
    this.cdref.detectChanges();
  }

  nextPage(e: PageEvent) {
    this.getPendingShortReads(e.pageIndex, e.pageSize);
  }

  onAccept(id: string) {
    this.subscriptions.push(
      this.shortReadsService.onAccept(id).subscribe((data) => {
        Swal.fire({
          title: 'Great Job!',
          text: 'Your action has been completed!',
          icon: 'success',
        });
        this.getPendingShortReads(0, 3);
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

  onReject(id: string, reason: string) {
    this.subscriptions.push(
      this.shortReadsService.onReject(id, reason).subscribe((data) => {
        Swal.fire({
          title: 'Great Job!',
          text: 'Your action has been completed!',
          icon: 'success',
        });
        this.getPendingShortReads(0, 3);
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
}
