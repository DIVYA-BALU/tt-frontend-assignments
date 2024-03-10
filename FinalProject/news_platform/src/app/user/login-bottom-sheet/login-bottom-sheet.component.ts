import { Component } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-login-bottom-sheet',
  templateUrl: './login-bottom-sheet.component.html',
  styleUrls: ['./login-bottom-sheet.component.scss']
})
export class LoginBottomSheetComponent {

    constructor(private _bottomSheetRef: MatBottomSheetRef<LoginBottomSheetComponent>) {}
  
    openLink(event: MouseEvent): void {
      this._bottomSheetRef.dismiss();
      event.preventDefault();
    }
  }