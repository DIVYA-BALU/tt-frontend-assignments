import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BillService } from 'src/app/core/services/bill.service';
import { PopUpComponent } from '../../pop-up/pop-up.component';
import { InvestmentService } from 'src/app/core/services/investment.service';
import { IncomeStatement } from 'src/app/core/models/API.model';
import { Router } from '@angular/router';
import { InvestmentDialogFormComponent } from '../investment-dialog-form/investment-dialog-form.component';

@Component({
  selector: 'app-financial-management',
  templateUrl: './financial-management.component.html',
  styleUrls: ['./financial-management.component.scss']
})

export class FinancialManagementComponent {
  displayedColumnsForBranchWiseAnalysis: string[] = ['Serial Number', 'Branch Name', 'Total COGS', 'Total Revenue', 'Profit / Loss'];
  displayedColumnsForSectionWiseAnalysis: string[] = ['Serial Number', 'Section Name', 'Total COGS', 'Total Revenue', 'Profit / Loss'];
  pageNumber: number = 0;
  pageSize: number = 10;
  totalResults: number = 0;
  branchWiseAnalysis: MatTableDataSource<IncomeStatement>;
  sectionWiseAnalysis: MatTableDataSource<IncomeStatement>;
  totalRevenue: number = 0;
  totalInvestment: number = 0;

  constructor(private billService: BillService, private investmentService: InvestmentService, private dialog: MatDialog, private router: Router) {
    this.branchWiseAnalysis = new MatTableDataSource<IncomeStatement>;
    this.sectionWiseAnalysis = new MatTableDataSource<IncomeStatement>;
  }

  ngOnInit() {
    this.getTotalRevenueAndInvestment();
    this.getBranchWiseAnalysis();
    this.getSectionWiseAnalysis();
    this.investmentService.setTotalInvestmentSubject();
  }

  getTotalRevenueAndInvestment() {
    this.billService.getRevenue().subscribe({
      next: (revenue) => { this.totalRevenue = revenue.totalRevenue },
      error: () => {
        this.dialog.open(PopUpComponent, {
          data: {
            message: 'Error occured retry after sometime',
          },
        });
      }
    })

    this.investmentService.totalInvestment$.subscribe({
      next: (investment) => this.totalInvestment = investment.amount,
      error: () => {
        this.dialog.open(PopUpComponent, {
          data: {
            message: 'Error occured retry after sometime',
          },
        });
      }
    })
  }

  openProductDialogForm(){
    const dialogRef = this.dialog.open(InvestmentDialogFormComponent, { disableClose: true });
  }

  getBranchWiseAnalysis() {
      this.billService.getBranchWiseAnalysis().subscribe({
        next: (paginatedBanchWiseAnalysis) => {
          this.branchWiseAnalysis.data = paginatedBanchWiseAnalysis.content;
        }
      })
  }

  getSectionWiseAnalysis() {
    this.billService.getSectionWiseAnalysis().subscribe({
      next: (paginatedSectionWiseAnalysis) => {
        this.sectionWiseAnalysis.data = paginatedSectionWiseAnalysis.content;
      }
    })
  }

  onBranchWisePageChange(event: PageEvent): void {
    this.pageNumber = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getSectionWiseAnalysis();
    this.getBranchWiseAnalysis();
  }

  onSectionWisePageChange(event: PageEvent): void {

  }

  onRowClicked(branchId: string, sectionId: string){
    this.router.navigate(['/component-b'], { 
      queryParams: { sectionId, branchId }
    });
  }

}
