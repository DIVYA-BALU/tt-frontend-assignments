import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { UserRequestComponent } from './user-request/user-request.component';
import { NewsComponent } from './news/news.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { RejectedArticleComponent } from './rejected-article/rejected-article.component';
import { CreateShortReadsComponent } from './create-short-reads/create-short-reads.component';
import { RejectedShortReadsComponent } from './rejected-short-reads/rejected-short-reads.component';
import { CreateNewsComponent } from './create-news/create-news.component';
import { RejectNewsComponent } from './reject-news/reject-news.component';
import { AccountComponent, DialogOverviewExampleDialog } from './account/account.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { ShortReadsComponent } from './short-reads/short-reads.component';
import { ArticleComponent } from './article/article.component';
import { UserNewsComponent } from './user-news/user-news.component';
import { RoutehideModule } from '../custom_directive/routehide.module';
import { BreakingNewsComponent } from './breaking-news/breaking-news.component';
import { SensationalNewsComponent } from './sensational-news/sensational-news.component';


@NgModule({
  declarations: [
    EmployeesComponent,
    UserRequestComponent,
    NewsComponent,
    CreateArticleComponent,
    RejectedArticleComponent,
    CreateShortReadsComponent,
    RejectedShortReadsComponent,
    CreateNewsComponent,
    RejectNewsComponent,
    AccountComponent,
    DialogOverviewExampleDialog,
    DialogBoxComponent,
    ShortReadsComponent,
    ArticleComponent,
    UserNewsComponent,
    BreakingNewsComponent,
    SensationalNewsComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    EditorModule,
    ReactiveFormsModule,
    RoutehideModule
  ],
  providers: [
    {
      provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js'
    }
  ]
})
export class EmployeesModule { }
