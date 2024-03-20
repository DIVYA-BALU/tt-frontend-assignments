import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogue-image',
  templateUrl: './dialogue-image.component.html',
  styleUrls: ['./dialogue-image.component.scss']
})
export class DialogueImageComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogueImageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {images: string[]}
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
