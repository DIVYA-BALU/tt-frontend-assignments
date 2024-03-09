import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreManagementComponent } from './store-management/store-management.component';
import { FinancialManagementComponent } from './financial-management/financial-management.component';
import { EmployeeManagentComponent } from './employee-managent/employee-managent.component';
import { SectionWiseAnalysisComponent } from './section-wise-analysis/section-wise-analysis.component';
import { DateWiseAnalysisComponent } from './date-wise-analysis/date-wise-analysis.component';

const routes: Routes = [
  {
    path: 'store-management', component: StoreManagementComponent
  },
  {
    path: 'financial-management', component: FinancialManagementComponent,
  },
  {
    path: 'employee-management', component: EmployeeManagentComponent
  },
  {
    path: 'section-wise-analysis-for-branch', component: SectionWiseAnalysisComponent
  },
  {
    path: 'date-wise-analysis-for-section', component: DateWiseAnalysisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
