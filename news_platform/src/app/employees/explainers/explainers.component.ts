import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Explainers } from 'src/app/model/Explainers';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { ExplainersService } from './explainers.service';

@Component({
  selector: 'app-explainers',
  templateUrl: './explainers.component.html',
  styleUrls: ['./explainers.component.scss']
})
export class ExplainersComponent {

  pendingExplainers: Explainers[] = [];

  displayedColumns: string[] = [
    'explainersUid',
    'title',
    'images',
    'content',
    'date',
    'approval'
  ];

  dataSource!: MatTableDataSource<Explainers>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  status: string = '';

  totalElements: number = 0;
  pageSize: number = 3; 

  constructor(private explainersService: ExplainersService, public dialog: MatDialog, private cdref: ChangeDetectorRef){
    this.dataSource = new MatTableDataSource(this.pendingExplainers);
  }

  getPendingExplainers(pageIndex: number, pageSize: number){
    this.explainersService.getPendingExplainers(pageIndex, pageSize).subscribe( (data) => {
      this.pendingExplainers = data.content;
      this.paginator.length = data.totalElements;
      this.paginator.pageIndex = data.number;
      this.paginator.pageSize = data.size;
      this.dataSource.data = this.pendingExplainers;
    })
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe((data) => {
      this.getPendingExplainers(data.pageIndex, data.pageSize);
    })
    this.getPendingExplainers(0, 3);
    this.cdref.detectChanges();
  }

  nextPage(e: PageEvent) {
    this.getPendingExplainers(e.pageIndex, e.pageSize);
  }

  onAccept(id: string) {
    this.explainersService.onAccept(id).subscribe((data) => {
      console.log(data);
      this.getPendingExplainers(0, 3);
    });
  }

  onReject(id: string, reason: string) {
    this.explainersService.onReject(id, reason).subscribe((data) => {
      this.getPendingExplainers(0, 3);
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
