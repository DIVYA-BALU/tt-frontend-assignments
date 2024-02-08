import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AdminComponent } from '../admin/admin.component';
import { ContentModeratorComponent } from '../content-moderator/content-moderator.component';
import { ExploreComponent } from '../explore/explore.component';
import { ProfileComponent } from '../profile/profile.component';
import { UserHomeComponent } from '../user-home/user-home.component';
import { PostComponent } from '../post/post.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CommentComponent } from '../post/comment/comment.component';

@NgModule({
  declarations: [
    UserHomeComponent,
    ExploreComponent,
    ProfileComponent,
    PostComponent,
    CommentComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class UserModule { }
