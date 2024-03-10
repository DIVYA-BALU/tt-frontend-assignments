import { Component, inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-failure-snack-bar',
  templateUrl: './failure-snack-bar.component.html',
  styleUrls: ['./failure-snack-bar.component.scss']
})
export class FailureSnackBarComponent {
  snackBarRef = inject(MatSnackBarRef);
}
