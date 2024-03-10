import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductLayoutComponent } from './pages/admin/product-layout/product-layout.component';
import { ManagerLayoutComponent } from './pages/admin/manager-layout/manager-layout.component';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'admin', component: LayoutComponent,
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'employee', component: ProductLayoutComponent,
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'manager', component: ManagerLayoutComponent,
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
