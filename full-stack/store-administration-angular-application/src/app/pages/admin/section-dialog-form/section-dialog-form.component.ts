import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SectionService } from 'src/app/core/services/section.service';
import { PopUpComponent } from '../../pop-up/pop-up.component';

@Component({
  selector: 'app-section-dialog-form',
  templateUrl: './section-dialog-form.component.html',
  styleUrls: ['./section-dialog-form.component.scss']
})
export class SectionDialogFormComponent {
  sectionCreationForm: FormGroup;
  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private sectionService: SectionService, private dialog: MatDialog) {
    this.sectionCreationForm = this.fb.group({
      name: ['', [Validators.required]]
    })
  }

  submit() {
    this.isLoading = true;
    this.sectionService.saveSection(this.sectionCreationForm.value).subscribe({
      next: () => {
        this.isLoading = false,
        this.sectionService.setPaginationSectionsSubject();
        this.closeSectionDialogForm();
        this.dialog.open(PopUpComponent, {
          data: {
            message: 'Section Saved Successfuly',
          },
        });
      },
      error: (HttpErrorResponse) => {
        this.isLoading = false;
        this.dialog.open(PopUpComponent, {
          data: {
            message: 'Error occured',
          },
        });
      }
    })
  }

  closeSectionDialogForm() {
    this.dialog.closeAll();
  }
}
