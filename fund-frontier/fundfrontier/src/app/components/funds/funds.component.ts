import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Funds } from 'src/app/model/funds';
import { FundsService } from 'src/app/services/funds.service';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.scss']
})
export class FundsComponent {
  funds: Funds[] = [];
  displayedColumns: string[] = [
    'funderEmail',
    'studentEmail',
    'totalAmount',
    'date',
    'studentAmount',
    'maintainenceAmount'
  ]

  dataSource!: MatTableDataSource<Funds>;

  @ViewChild(MatPaginator) paginator!: MatPaginator

  constructor(private fundsService: FundsService, private cdref: ChangeDetectorRef) {
    this.dataSource = new MatTableDataSource(this.funds)
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe(
      (data) => {
        this.getAllFunds(data.pageIndex, data.pageSize);
      }
    )
    this.getAllFunds(0, 3);
    this.cdref.detectChanges();

  }

  nextPage(e: PageEvent) {
    this.getAllFunds(e.pageIndex, e.pageSize);
  }


  getAllFunds(pageIndex: number, pageSize: number) {
    this.fundsService.getAllFunds(pageIndex, pageSize).subscribe(
      (data) => {
        this.funds = data.content;
        this.paginator.length = data.totalElements;
        this.paginator.pageIndex = data.number;
        this.paginator.pageSize = data.size;
        this.dataSource.data = this.funds;
      }
    )
  }
}
