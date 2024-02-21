import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentModeratorRoutingModule } from './content-moderator-routing.module';
import { ContentModeratorHomeComponent } from '../content-moderator-home/content-moderator-home.component';
import { PostComponent } from '../post/post.component';
import { PostReportComponent } from '../post-report/post-report.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { UserRoutingModule } from '../user/user-routing.module';


@NgModule({
  declarations: [
    ContentModeratorHomeComponent,
    PostReportComponent,
    
  ],
  imports: [
    CommonModule,
    ContentModeratorRoutingModule,
    PostComponent,
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class ContentModeratorModule { }
