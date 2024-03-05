import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-practice';

  text: string = '';

  editorConfig = {
    base_url: "/tinymce",
    suffix: '.min',
    plugins: 'lists link image table wordcount',
    image_advtab: false,
  };
}
