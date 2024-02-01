import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleListComponent } from './sample-list/sample-list.component';
import { LodashExampleComponent } from './lodash-example/lodash-example.component';
import { AppComponent } from './app.component';
import { LodashDifferentExampleComponent } from './lodash-different-example/lodash-different-example.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'first-component', component: SampleListComponent },
  { path: 'lodash', component: LodashExampleComponent ,children:[
    { path: 'different', component: LodashDifferentExampleComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
