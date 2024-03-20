import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Explainers } from 'src/app/model/Explainers';
import { RejectedExplainersService } from './rejected-explainers.service';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rejected-explainers',
  templateUrl: './rejected-explainers.component.html',
  styleUrls: ['./rejected-explainers.component.scss'],
})
export class RejectedExplainersComponent implements OnDestroy {
  subscription: Subscription[] = [];
  rejectedExplainers: Explainers[] = [];

  displayedColumns: string[] = [
    'explainersUid',
    'title',
    'images',
    'content',
    'date',
    'reason',
  ];

  dataSource!: MatTableDataSource<Explainers>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  status: string = '';

  totalElements: number = 0;
  pageSize: number = 3;

  constructor(
    private rejectedExplainersService: RejectedExplainersService,
    public dialog: MatDialog,
    private cdref: ChangeDetectorRef
  ) {
    this.dataSource = new MatTableDataSource(this.rejectedExplainers);
  }

  getRejectedExplainers(pageIndex: number, pageSize: number) {
    this.subscription.push(
      this.rejectedExplainersService
        .getRejectedExplainers(pageIndex, pageSize)
        .subscribe((data) => {
          this.rejectedExplainers = data.content;
          this.paginator.length = data.totalElements;
          this.paginator.pageIndex = data.number;
          this.paginator.pageSize = data.size;
          this.dataSource.data = this.rejectedExplainers;
        })
    );
  }

  ngAfterViewInit() {
    this.subscription.push(
      this.paginator.page.subscribe((data) => {
        this.getRejectedExplainers(data.pageIndex, data.pageSize);
      })
    );
    this.getRejectedExplainers(0, 3);
    this.cdref.detectChanges();
  }

  nextPage(e: PageEvent) {
    this.getRejectedExplainers(e.pageIndex, e.pageSize);
  }

  ngOnDestroy(): void {
    this.subscription.forEach((data) => {
      data.unsubscribe();
    });
  }
}
