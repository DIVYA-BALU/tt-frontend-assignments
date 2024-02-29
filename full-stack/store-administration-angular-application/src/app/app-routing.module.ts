import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/admin/layout/layout.component';

const routes: Routes = [
  {
    path: 'admin', component: LayoutComponent,
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
