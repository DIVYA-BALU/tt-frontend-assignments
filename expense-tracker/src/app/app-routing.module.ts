import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: "", loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)},
  { path: "signup", loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)},
  { path: "login", loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  { path: "home", loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard]},
  { path: "addAccount", loadChildren: () => import('./add-account/add-account.module').then(m => m.AddAccountModule), canActivate: [AuthGuard]},
  { path: "addTransaction", loadChildren: () => import('./add-transaction/add-transaction.module').then(m => m.AddTransactionModule),  canActivate: [AuthGuard]},
  { path: "viewStatement", loadChildren: () => import('./view-statement/view-statement.module').then(m => m.ViewStatementModule),  canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})  
export class AppRoutingModule {

}
