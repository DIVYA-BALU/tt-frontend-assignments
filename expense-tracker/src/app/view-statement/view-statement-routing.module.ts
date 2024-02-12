import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewStatementComponent } from './view-statement.component';

const routes: Routes = [
  {path: '', component: ViewStatementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewStatementRoutingModule { }
