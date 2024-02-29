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


@NgModule({
  declarations: [
    FinancialManagementComponent,
    StoreManagementComponent,
    EmployeeManagentComponent,
    BranchLayoutComponent,
    SectionLayoutComponent,
    BranchDialogFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
