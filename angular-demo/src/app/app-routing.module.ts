import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleListComponent } from './sample-list/sample-list.component';
import { LodashExampleComponent } from './lodash-example/lodash-example.component';
import { AppComponent } from './app.component';
import { LodashDifferentExampleComponent } from './lodash-different-example/lodash-different-example.component';
import { LoginComponent } from './login/login.component';
import { AdminModule } from './admin/admin.module';
import { AuthGuard } from './auth.guard';
import { DashbordComponent } from './dashbord/dashbord.component';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'first-component', component: SampleListComponent,canActivate:[AuthGuard] },
  { path: 'app-dashbord', component: DashbordComponent,canActivate:[AuthGuard] },
  { path: 'lodash', component: LodashExampleComponent ,children:[
    { path: 'different', component: LodashDifferentExampleComponent },
  ]},
  {
    path:"admin", loadChildren:() => import("./admin/admin.module").then((d) => d.AdminModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
