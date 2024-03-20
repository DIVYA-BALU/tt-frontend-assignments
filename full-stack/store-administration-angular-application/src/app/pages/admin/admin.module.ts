import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FinancialManagementComponent } from './financial-management/financial-management.component';
import { StoreManagementComponent } from './store-management/store-management.component';
import { EmployeeManagentComponent } from './employee-managent/employee-managent.component';
import { BranchLayoutComponent } from './branch-layout/branch-layout.component';
import { SectionLayoutComponent } from './section-layout/section-layout.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BranchDialogFormComponent } from './branch-dialog-form/branch-dialog-form.component';
import { SectionDialogFormComponent } from './section-dialog-form/section-dialog-form.component';
import { ProductDialogFormComponent } from './product-dialog-form/product-dialog-form.component';
import { ProductLayoutComponent } from './product-layout/product-layout.component';
import { UserEnrollmentDialogFormComponent } from './user-enrollment-dialog-form/user-enrollment-dialog-form.component';
import { InvestmentDialogFormComponent } from './investment-dialog-form/investment-dialog-form.component';
import { BillComponent } from './bill/bill.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { SectionWiseAnalysisComponent } from './section-wise-analysis/section-wise-analysis.component';
import { PermissionDirective } from 'src/app/directives/permission.directive';
import { BranchDirective } from 'src/app/directives/branch.directive';
import { RoleDirective } from 'src/app/directives/role.directive';
import { MatButtonModule } from '@angular/material/button';
import { UserUpdateFormComponent } from './user-update-form/user-update-form.component';
import { ManagerLayoutComponent } from './manager-layout/manager-layout.component';
import {MatListModule} from '@angular/material/list';
import { ProductsBillingComponent } from './products-billing/products-billing.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    FinancialManagementComponent,
    StoreManagementComponent,
    EmployeeManagentComponent,
    BranchLayoutComponent,
    SectionLayoutComponent,
    BranchDialogFormComponent,
    SectionDialogFormComponent,
    ProductLayoutComponent,
    ProductDialogFormComponent,
    UserEnrollmentDialogFormComponent,
    InvestmentDialogFormComponent,
    BillComponent,
    SectionWiseAnalysisComponent,
    PermissionDirective,
    BranchDirective,
    RoleDirective,
    UserUpdateFormComponent,
    ManagerLayoutComponent,
    ProductsBillingComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    FormsModule,
    MatListModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule, 
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class AdminModule { }
