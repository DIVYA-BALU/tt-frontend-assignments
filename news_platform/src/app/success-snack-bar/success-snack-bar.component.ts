import { Component, inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-success-snack-bar',
  templateUrl: './success-snack-bar.component.html',
  styleUrls: ['./success-snack-bar.component.scss']
})
export class SuccessSnackBarComponent {
    snackBarRef = inject(MatSnackBarRef);
}
