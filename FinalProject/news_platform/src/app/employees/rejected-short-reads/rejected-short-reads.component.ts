import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ShortReads } from 'src/app/model/ShortReads';
import { RejectedShortReadsService } from './rejected-short-reads.service';
import { Subscription } from 'rxjs';
import { ContentDialogDataComponent } from '../content-dialog-data/content-dialog-data.component';
import { DialogueImageComponent } from '../dialogue-image/dialogue-image.component';

@Component({
  selector: 'app-rejected-short-reads',
  templateUrl: './rejected-short-reads.component.html',
  styleUrls: ['./rejected-short-reads.component.scss'],
})
export class RejectedShortReadsComponent implements OnDestroy {
  subscription: Subscription[] = [];
  rejectedShortReads: ShortReads[] = [];

  displayedColumns: string[] = [
    'shortReadsUid',
    'title',
    'category',
    'images',
    'content',
    'date',
    'reason',
  ];

  dataSource!: MatTableDataSource<ShortReads>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  status: string = '';

  totalElements: number = 0;
  pageSize: number = 3;

  constructor(
    private rejectedShortReadsService: RejectedShortReadsService,
    public dialog: MatDialog,
    private cdref: ChangeDetectorRef
  ) {
    this.dataSource = new MatTableDataSource(this.rejectedShortReads);
  }

  getRejectedShortReads(pageIndex: number, pageSize: number) {
    this.subscription.push(
      this.rejectedShortReadsService
        .getRejectedShortReads(pageIndex, pageSize)
        .subscribe((data) => {
          this.rejectedShortReads = data.content;
          this.paginator.length = data.totalElements;
          this.paginator.pageIndex = data.number;
          this.paginator.pageSize = data.size;
          this.dataSource.data = this.rejectedShortReads;
        })
    );
  }

  ngAfterViewInit() {
    this.subscription.push(
      this.paginator.page.subscribe((data) => {
        this.getRejectedShortReads(data.pageIndex, data.pageSize);
      })
    );
    this.getRejectedShortReads(0, 3);
    this.cdref.detectChanges();
  }

  nextPage(e: PageEvent) {
    this.getRejectedShortReads(e.pageIndex, e.pageSize);
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
    this.subscription.forEach((data) => {
      data.unsubscribe();
    });
  }
}
