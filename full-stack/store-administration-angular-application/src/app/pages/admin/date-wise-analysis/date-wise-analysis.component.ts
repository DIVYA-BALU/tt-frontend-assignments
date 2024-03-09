import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { IncomeStatement } from 'src/app/core/models/API.model';
import { BillService } from 'src/app/core/services/bill.service';

@Component({
  selector: 'app-date-wise-analysis',
  templateUrl: './date-wise-analysis.component.html',
  styleUrls: ['./date-wise-analysis.component.scss']
})

export class DateWiseAnalysisComponent {
  displayedColumnsForDateWiseAnalysisForSection: string[] = ['Serial Number', 'Date', 'Total COGS', 'Total Revenue', 'Profit / Loss'];
  dateWiseAnalysisForSection: MatTableDataSource<IncomeStatement>;
  private sectionId: string = '';
  private branchId: string = '';
  branchName: string = '';
  sectionName: string = '';
  pageNumber: number = 0;
  pageSize: number = 10;
  totalDates: number = 0;

  constructor(private billservice: BillService, private route: ActivatedRoute){
    this.dateWiseAnalysisForSection = new MatTableDataSource<IncomeStatement>;
  }

  ngOnInit() {
    this.route.queryParams.subscribe({
      next: (params) => {
        this.sectionId = params['sectionId'];
        this.sectionName = params['sectionName'];
        this.branchId = params['branchId'];
        this.branchName = params['branchName'];
        this.getDateWiseAnalysisForSection();        
      }
    })
  }

  onPageChange(event: PageEvent): void {
    this.pageNumber = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getDateWiseAnalysisForSection();        
  }

  getDateWiseAnalysisForSection() {
    this.billservice.getDateWiseAnalysisForSection(this.pageNumber, this.pageSize, this.branchId, this.sectionId).subscribe({
      next: (dateWiseAnalysisForSection) => {
        this.dateWiseAnalysisForSection.data = dateWiseAnalysisForSection.content;
        this.totalDates = dateWiseAnalysisForSection.totalElements;
      }
    })
  }

}
