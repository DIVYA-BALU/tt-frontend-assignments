import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DocumentViewerModule } from '@txtextcontrol/tx-ng-document-viewer';
import { CKEditorModule } from 'ckeditor4-angular';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { NgxEditorModule } from 'ngx-editor';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DocumentViewerModule,
    CKEditorModule,
    EditorModule,
    NgxEditorModule,
    AppRoutingModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
