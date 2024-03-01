import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {
  message: string = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data: {message: ''}) {
    this.message = data.message;
  }
}
