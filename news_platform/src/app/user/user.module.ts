import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
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
    DailyNewsComponent
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
    MatBottomSheetModule
  ]
})
export class UserModule { }
