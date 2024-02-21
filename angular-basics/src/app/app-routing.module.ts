import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import { LoginTestComponent } from './login-test/login-test.component';
import { AuthGuard } from './auth.guard';
import { SampleComponent } from './sample/sample.component';
import { Sample2Component } from './sample2/sample2.component';

const routes: Routes = [
  // {path:'/post-list',component:PostListComponent}
  // {path:'child',component: ChildComponent}
  { path: 'login', component: LoginTestComponent},
  { path: 'first-component', component: FirstComponent,
  children:[
    { path: 'parent-component', component: ParentComponent}
  ]
  },
  { path: 'second-component', component: SecondComponent,
  children:[
    { path: 'api-call', component: PostListComponent}
  ]
  },
  {path:'dashboard', loadChildren: () => 
    import('./dashboard/dashboard.module')
    .then((out) => out.DashboardModule), canActivate:[AuthGuard]
  },
  {path:"sample", component: SampleComponent},
  {path:"sample2", component: Sample2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
