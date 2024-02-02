import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './authguard';
const appRoute: Routes = [

  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: '', component: AppComponent },

  {
    path: 'lodash', loadChildren: () =>
      import('./lodash/lodash.module').then((d) => d.LodashModule)
  },

  {
    path: 'admin', loadChildren: () =>
      import('./admin/admin.module').then((d) => d.AdminModule), canActivate: [AuthGuard]
  },

  {
    path: 'dashboard', loadChildren: () =>
      import('./dashboard/dashboard.module').then((d) => d.DashModule)
  },
  {
    path: 'custom', loadChildren: () =>
      import('./custom/custom.module').then((d) => d.CustomModule)
  },

  // {
  //   path: 'dashboard', component: DashboardComponent,
  //   children: [
  //     {
  //       path: 'lodash', component: LodashComponent,
  //       children: [
  //         { path: 'different', component: ThirdComponent }
  //       ]
  //     },
  //     { path: 'custom', component: SecondComponent },
  //   ]
  // },

  { path: 'login', component: LoginComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
