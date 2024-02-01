import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const appRoute: Routes = [
  // { path: '', redirectTo: 'first', pathMatch: 'full' },
  // { path: '', component: AppComponent },
  {
    path: 'lodash', component: FirstComponent, children: [
      { path: 'different', component: ThirdComponent }
    ]
  },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path: 'lodash', component: FirstComponent,
        children: [
          { path: 'different', component: ThirdComponent }
        ]
      },
      { path: 'custom', component: SecondComponent },
    ]
  },
  { path: 'custom', component: SecondComponent },
  { path: 'login', component: LoginComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
