import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BillService } from 'src/app/core/services/bill.service';
import { PopUpComponent } from '../../pop-up/pop-up.component';
import { InvestmentService } from 'src/app/core/services/investment.service';

@Component({
  selector: 'app-financial-management',
  templateUrl: './financial-management.component.html',
  styleUrls: ['./financial-management.component.scss']
})
export class FinancialManagementComponent {
  displayedColumns: string[] = ['Serial Number', 'Branch Name', 'Section Name', 'Total COGS', 'Total Revenue'];
  pageNumber: number = 0;
  pageSize: number = 10;
  totalResults: number =0;
  branchWiseAnalysis: MatTableDataSource<null>;
  sectionWiseAnalysis: MatTableDataSource<null>;
  totalRevenue: number = 0;
  totalInvestment: number = 0;

  constructor(private billService: BillService, private investmentService: InvestmentService, private dialog: MatDialog) {
    this.branchWiseAnalysis = new MatTableDataSource<null>;
    this.sectionWiseAnalysis = new MatTableDataSource<null>;
  }

  ngOnInit(){
    this.getTotalRevenueAndInvestment();
    console.log("called");
  }

  getTotalRevenueAndInvestment(){
    this.billService.getRevenue().subscribe({
      next: (revenue) => {this.totalRevenue = revenue.totalRevenue,
        console.log(revenue);    
      },
      error: () => {
        this.dialog.open(PopUpComponent, {
          data: {
            message: 'Error occured retry after sometime',
          },
        });
      }
    })

    this.investmentService.getTotalInvestment().subscribe({
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
  // getProfitLossStatement(){
  //   this.billService.profitLossStatement().subscribe({
  //     next: (paginatedProfitLoss) => {
  //       this.dataSource.data = paginatedProfitLoss.content;
  //     }
  //   })
  // }
  
  onBranchWisePageChange(event: PageEvent): void {
    this.pageNumber = event.pageIndex;
    this.pageSize = event.pageSize;
    //this.getEventDetails();
  }

  onSectionWisePageChange(event: PageEvent): void{

  }
}
