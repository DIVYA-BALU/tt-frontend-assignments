import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Explainers } from 'src/app/model/Explainers';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { ExplainersService } from './explainers.service';
import { Subscription } from 'rxjs';
import { ContentDialogDataComponent } from '../content-dialog-data/content-dialog-data.component';
import Swal from 'sweetalert2';
import { DialogueImageComponent } from '../dialogue-image/dialogue-image.component';

@Component({
  selector: 'app-explainers',
  templateUrl: './explainers.component.html',
  styleUrls: ['./explainers.component.scss'],
})
export class ExplainersComponent implements OnDestroy {
  subscriptions: Subscription[] = [];

  pendingExplainers: Explainers[] = [];

  displayedColumns: string[] = [
    'explainersUid',
    'title',
    'images',
    'content',
    'date',
    'approval',
  ];

  dataSource!: MatTableDataSource<Explainers>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  status: string = '';

  totalElements: number = 0;
  pageSize: number = 3;

  constructor(
    private explainersService: ExplainersService,
    public dialog: MatDialog,
    private cdref: ChangeDetectorRef
  ) {
    this.dataSource = new MatTableDataSource(this.pendingExplainers);
  }

  getPendingExplainers(pageIndex: number, pageSize: number) {
    this.subscriptions.push(
      this.explainersService
        .getPendingExplainers(pageIndex, pageSize)
        .subscribe((data) => {
          this.pendingExplainers = data.content;
          this.paginator.length = data.totalElements;
          this.paginator.pageIndex = data.number;
          this.paginator.pageSize = data.size;
          this.dataSource.data = this.pendingExplainers;
        })
    );
  }

  ngAfterViewInit() {
    this.subscriptions.push(
      this.paginator.page.subscribe((data) => {
        this.getPendingExplainers(data.pageIndex, data.pageSize);
      })
    );
    this.getPendingExplainers(0, 3);
    this.cdref.detectChanges();
  }

  nextPage(e: PageEvent) {
    this.getPendingExplainers(e.pageIndex, e.pageSize);
  }

  onAccept(id: string) {
    this.subscriptions.push(
      this.explainersService.onAccept(id).subscribe((data) => {
        Swal.fire({
          title: 'Great Job!',
          text: 'Your action has been completed!',
          icon: 'success',
        });
        this.getPendingExplainers(0, 3);
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
      this.explainersService.onReject(id, reason).subscribe((data) => {
        Swal.fire({
          title: 'Great Job!',
          text: 'Your action has been completed!',
          icon: 'success',
        });
        this.getPendingExplainers(0, 3);
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
