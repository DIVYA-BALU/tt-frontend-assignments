import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AdminComponent } from '../admin/admin.component';
import { ContentModeratorComponent } from '../content-moderator/content-moderator.component';
import { ExploreComponent } from '../explore/explore.component';
import { ProfileComponent } from '../profile/profile.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { PostComponent } from '../post/post.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CommentComponent } from '../comment/comment.component';
import {MatDialogModule,MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import { AddpostComponent } from '../addpost/addpost.component';
import { MatMenuModule } from '@angular/material/menu';
import { ViewUserProfileComponent } from './view-user-profile/view-user-profile.component';
import { ExampleComponent } from '../example/example.component';
import { ReadPostReportDirective } from '../read-post-report.directive';

@NgModule({
  declarations: [
    UserHomeComponent,
    ExploreComponent,
    CommentComponent,
    AddpostComponent,
    ViewUserProfileComponent,
    ExampleComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    PostComponent,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule
  ],
  // providers:[{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'underline'}}]
})
export class UserModule { }
