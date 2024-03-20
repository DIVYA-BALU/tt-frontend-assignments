import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RoleGuard } from './guard/role.guard';
import { SubscriptionComponent } from './subscription/subscription.component';
import { AuthGuard } from './guard/auth.guard';
import { PostLoginGuard } from './guard/post-login.guard';
import { PostSubscriptionGuard } from './guard/post-subscription.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/user/home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((module) => module.LoginModule),
    canActivate: [PostLoginGuard]
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./signup/signup.module').then((module) => module.SignupModule),
    canActivate: [PostLoginGuard]
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then((module) => module.UserModule),
  },
  {
    path: 'employee',
    loadChildren: () =>
      import('./employees/employees.module').then(
        (module) => module.EmployeesModule
      ),
    canActivate: [RoleGuard],
  },
  {
    path: 'subscription',
    component: SubscriptionComponent,
    canActivate: [AuthGuard, PostSubscriptionGuard],
  },
  {
    path: '**',
    component: PagenotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
