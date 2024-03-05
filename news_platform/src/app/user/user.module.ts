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
import { RoutehideDirective } from '../custom_directive/routehide.directive';


@NgModule({
  declarations: [
    HomeComponent,
    UserComponent,
    RoutehideDirective
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
    MatExpansionModule
  ]
})
export class UserModule { }
