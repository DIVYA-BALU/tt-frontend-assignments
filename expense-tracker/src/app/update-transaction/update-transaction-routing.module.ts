import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateTransactionComponent } from './update-transaction.component';

const routes: Routes = [
  { path: '', component: UpdateTransactionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateTransactionRoutingModule { }
