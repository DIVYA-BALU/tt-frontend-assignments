import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { AccountComponent } from './account/account.component';
import { UserRequestComponent } from './user-request/user-request.component';
import { NewsComponent } from './news/news.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { RejectedArticleComponent } from './rejected-article/rejected-article.component';
import { CreateShortReadsComponent } from './create-short-reads/create-short-reads.component';
import { RejectedShortReadsComponent } from './rejected-short-reads/rejected-short-reads.component';
import { CreateNewsComponent } from './create-news/create-news.component';
import { RejectNewsComponent } from './reject-news/reject-news.component';
import { ProfileComponent } from '../profile/profile.component';
import { ShortReadsComponent } from './short-reads/short-reads.component';
import { ArticleComponent } from './article/article.component';
import { UserNewsComponent } from './user-news/user-news.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
    children: [
      {
        path: 'createAccount',
        component: AccountComponent,
      },
      {
        path: 'user-request',
        component: UserRequestComponent
      },
      {
        path: 'user-news',
        component: UserNewsComponent
      },
      {
        path: 'display-news',
        component: NewsComponent
      },
      {
        path: 'display-shortReads',
        component: ShortReadsComponent
      },
      {
        path: 'display-article',
        component: ArticleComponent
      },
      {
        path: 'create-article',
        component: CreateArticleComponent
      },
      {
        path: 'rejected-article',
        component: RejectedArticleComponent
      },
      {
        path: 'create-shortReads',
        component: CreateShortReadsComponent
      },
      {
        path: 'rejected-shortReads',
        component: RejectedShortReadsComponent
      },
      {
        path: 'create-news',
        component: CreateNewsComponent
      },
      {
        path: 'rejected-news',
        component: RejectNewsComponent
      },
      {
       path: "profile",
       component: ProfileComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}
