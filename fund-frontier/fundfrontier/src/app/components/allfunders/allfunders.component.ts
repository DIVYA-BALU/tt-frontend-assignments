import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Funder } from 'src/app/model/funder';
import { FundersComponent } from '../funders/funders.component';
import { FundersService } from 'src/app/services/funders.service';

@Component({
  selector: 'app-allfunders',
  templateUrl: './allfunders.component.html',
  styleUrls: ['./allfunders.component.scss']
})
export class AllfundersComponent {
  funders: Funder[] = [];
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'email',
    'phoneNumber',
    'countryOfBirth',
    'countryOfResidence',
    'address',
    'city',
    'state',
    'zipCode'
  ]

  dataSource!: MatTableDataSource<Funder>;

  @ViewChild(MatPaginator) paginator!: MatPaginator

  constructor(private funderService: FundersService, private cdref: ChangeDetectorRef) {
    this.dataSource = new MatTableDataSource(this.funders)
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe(
      (data) => {
        this.getAllFunders(data.pageIndex, data.pageSize);
      }
    )
    this.getAllFunders(0, 3);
    this.cdref.detectChanges();

  }

  nextPage(e: PageEvent) {
    this.getAllFunders(e.pageIndex, e.pageSize);
  }


  getAllFunders(pageIndex: number, pageSize: number) {
    this.funderService.getAllFunders(pageIndex, pageSize).subscribe(
      (data) => {
        this.funders = data.content;
        this.paginator.length = data.totalElements;
        this.paginator.pageIndex = data.number;
        this.paginator.pageSize = data.size;
        this.dataSource.data = this.funders;
      }
    )
  }
}
