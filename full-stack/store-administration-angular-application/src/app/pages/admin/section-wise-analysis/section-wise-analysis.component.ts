import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IncomeStatement } from 'src/app/core/models/API.model';
import { BillService } from 'src/app/core/services/bill.service';

@Component({
  selector: 'app-section-wise-analysis',
  templateUrl: './section-wise-analysis.component.html',
  styleUrls: ['./section-wise-analysis.component.scss']
})

export class SectionWiseAnalysisComponent {
  displayedColumnsForSectionWiseAnalysisForBranch: string[] = ['Serial Number', 'Section Name', 'Total COGS', 'Total Revenue', 'Profit / Loss'];
  sectionWiseAnalysisForBranch: MatTableDataSource<IncomeStatement>;
  private branchId: string = '';
  branchName: string = '';
  pageNumber: number = 0;
  pageSize: number = 10;
  totalSections: number = 0;

  private subscription: Subscription = new Subscription;
  private sectionWiseAnalysisSubscription: Subscription = new Subscription;


  constructor(private billservice: BillService, private route: ActivatedRoute) {
    this.sectionWiseAnalysisForBranch = new MatTableDataSource<IncomeStatement>;
  }

  ngOnInit() {
    this.subscription = this.route.queryParams.subscribe({
      next: (params) => {
        this.branchId = params['branchId'];
        this.branchName = params['branchName'];
        this.getSectionWiseAnalysisForBranch();
      }
    })
  }

  onPageChange(event: PageEvent): void {
    this.pageNumber = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getSectionWiseAnalysisForBranch();
  }

  getSectionWiseAnalysisForBranch() {
    this.sectionWiseAnalysisSubscription = this.billservice.getSectionWiseAnalysisForBranch(this.pageNumber, this.pageSize, this.branchId).subscribe({
      next: (sectionWiseAnalysisForBranch) => {
        this.sectionWiseAnalysisForBranch.data = sectionWiseAnalysisForBranch.content;
        this.totalSections = sectionWiseAnalysisForBranch.totalElements;
      }
    })
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    if (this.sectionWiseAnalysisSubscription) {
      this.sectionWiseAnalysisSubscription.unsubscribe();
    }
  }

}
