import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from '../profile/profile.component';
import { SearchComponent } from './search/search.component';
import { ShortReadsComponent } from './short-reads/short-reads.component';
import { DisplayShortReadsComponent } from './display-short-reads/display-short-reads.component';
import { AuthGuard } from '../guard/auth.guard';
import { LoginBottomSheetComponent } from './login-bottom-sheet/login-bottom-sheet.component';
import { ArticleComponent } from './article/article.component';
import { DisplayArticleComponent } from './display-article/display-article.component';
import { DailyNewsComponent } from './daily-news/daily-news.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'search',
        component: SearchComponent,
      },
      {
        path: 'short-reads',
        component: ShortReadsComponent
      },
      {
        path: 'display-short-reads/:id',
        component: DisplayShortReadsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'login-botton-sheet',
        component: LoginBottomSheetComponent
      },
      {
        path: 'article',
        component: ArticleComponent
      },
      {
        path: 'display-article/:id',
        component: DisplayArticleComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'daily-news',
        component: DailyNewsComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
