import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './components/notes/notes.component';
import { NoteComponent } from './components/note/note.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { AboutProjectsComponent } from './components/about-projects/about-projects.component';
import { AboutSponsorsComponent } from './components/about-sponsors/about-sponsors.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteComponent,
    NotFoundComponent,
    AboutComponent,
    AboutProjectsComponent,
    AboutSponsorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
