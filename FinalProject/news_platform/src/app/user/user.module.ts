import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import { SearchComponent } from './search/search.component';
import {MatCardModule} from '@angular/material/card';
import { RoutehideModule } from '../custom_directive/routehide.module';
import { ShortReadsComponent } from './short-reads/short-reads.component';
import { DisplayShortReadsComponent } from './display-short-reads/display-short-reads.component';
import { LoginBottomSheetComponent } from './login-bottom-sheet/login-bottom-sheet.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { DisplayArticleComponent } from './display-article/display-article.component';
import { ArticleComponent } from './article/article.component';
import { DailyNewsComponent } from './daily-news/daily-news.component';
import { FormComponent } from './form/form.component';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DisplayNewsComponent } from './display-news/display-news.component';
import { CategoryComponent } from './category/category.component';
import { BreakingNewsComponent } from './breaking-news/breaking-news.component';
import {MatChipsModule} from '@angular/material/chips';
import { SensationalNewsComponent } from './sensational-news/sensational-news.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTabsModule} from '@angular/material/tabs';
import { TopNewsComponent } from './top-news/top-news.component';
import { DisplayCategoryComponent } from './display-category/display-category.component';
import { SavedStoriesComponent } from './saved-stories/saved-stories.component';
import { SubscriptionPageComponent } from './subscription-page/subscription-page.component';
import { MatTableModule } from '@angular/material/table';
import { TradingComponent } from './trading/trading.component';
import { ExplainersComponent } from './explainers/explainers.component';
import { DisplayExplainerComponent } from './display-explainer/display-explainer.component';
import { SubscribeDialogComponent } from './subscribe-dialog/subscribe-dialog.component';
import {ScrollingModule} from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    HomeComponent,
    UserComponent,
    SearchComponent,
    ShortReadsComponent,
    DisplayShortReadsComponent,
    LoginBottomSheetComponent,
    DisplayArticleComponent,
    ArticleComponent,
    DailyNewsComponent,
    FormComponent,
    DisplayNewsComponent,
    CategoryComponent,
    BreakingNewsComponent,
    SensationalNewsComponent,
    TopNewsComponent,
    DisplayCategoryComponent,
    SavedStoriesComponent,
    SubscriptionPageComponent,
    TradingComponent,
    ExplainersComponent,
    DisplayExplainerComponent,
    SubscribeDialogComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    EditorModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatExpansionModule,
    MatCardModule,
    RoutehideModule,
    MatTooltipModule,
    MatBottomSheetModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatBadgeModule,
    MatTabsModule,
    MatTableModule,
    ScrollingModule
  ],
  providers: [
    {
      provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js'
    }
  ]
})
export class UserModule { }
