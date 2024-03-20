import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-content-dialog-data',
  templateUrl: './content-dialog-data.component.html',
  styleUrls: ['./content-dialog-data.component.scss']
})
export class ContentDialogDataComponent {

  constructor(
    public dialogRef: MatDialogRef<ContentDialogDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {content: string}
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
