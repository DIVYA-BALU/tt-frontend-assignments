import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: "", loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)},
  { path: "signup", loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)},
  { path: "login", loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  { path: "home", loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard]},
  { path: "add-account", loadChildren: () => import('./add-account/add-account.module').then(m => m.AddAccountModule), canActivate: [AuthGuard]},
  { path: "add-transaction", loadChildren: () => import('./add-transaction/add-transaction.module').then(m => m.AddTransactionModule),  canActivate: [AuthGuard]},
  { path: "view-statement", loadChildren: () => import('./view-statement/view-statement.module').then(m => m.ViewStatementModule),  canActivate: [AuthGuard]},
  { path: "list-users", loadChildren: () => import('./list-users/list-users.module').then(m => m.ListUsersModule),  canActivate: [AuthGuard]},
  { path: "update-transaction", loadChildren: () => import('./update-transaction/update-transaction.module').then(m => m.UpdateTransactionModule),  canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})  
export class AppRoutingModule {

}
