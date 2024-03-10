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
import { FormComponent } from './form/form.component';
import { DisplayNewsComponent } from './display-news/display-news.component';
import { CategoryComponent } from './category/category.component';
import { BreakingNewsComponent } from './breaking-news/breaking-news.component';
import { SensationalNewsComponent } from './sensational-news/sensational-news.component';
import { TopNewsComponent } from './top-news/top-news.component';
import { DisplayCategoryComponent } from './display-category/display-category.component';
import { SavedStoriesComponent } from './saved-stories/saved-stories.component';
import { SubscriptionPageComponent } from './subscription-page/subscription-page.component';
import { SubscribeGuard } from '../guard/subscribe.guard';
import { TradingComponent } from './trading/trading.component';
import { ExplainersComponent } from './explainers/explainers.component';
import { DisplayExplainerComponent } from './display-explainer/display-explainer.component';

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
        path: 'explainers',
        component: ExplainersComponent
      },
      {
        path: 'display-short-reads/:id',
        component: DisplayShortReadsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'display-explainers/:id',
        component: DisplayExplainerComponent,
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
        path: 'display-news/:id',
        component: DisplayNewsComponent,
        canActivate: [SubscribeGuard]
      },
      {
        path: 'display-category/:category',
        component: DisplayCategoryComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'daily-news',
        component: DailyNewsComponent
      },
      {
        path: 'top-news',
        component: TopNewsComponent
      },
      {
        path: 'breaking-news',
        component: BreakingNewsComponent,
        canActivate: [SubscribeGuard]
      },
      {
        path: 'sensatinal-news',
        component: SensationalNewsComponent,
        canActivate: [SubscribeGuard]
      },
      {
        path: 'form',
        component: FormComponent,
        canActivate: [SubscribeGuard]
      },
      {
        path: 'topics',
        component: CategoryComponent
      },
      {
        path: 'savedstories',
        component: SavedStoriesComponent
      },
      {
        path: 'mySubscription',
        component: SubscriptionPageComponent,
        canActivate: [SubscribeGuard]
      },
      {
        path: 'trade',
        component: TradingComponent,
        canActivate: [SubscribeGuard]
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
