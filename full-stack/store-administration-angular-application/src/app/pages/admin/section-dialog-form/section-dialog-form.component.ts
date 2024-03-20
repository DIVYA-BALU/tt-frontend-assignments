import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SectionService } from 'src/app/core/services/section.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-section-dialog-form',
  templateUrl: './section-dialog-form.component.html',
  styleUrls: ['./section-dialog-form.component.scss']
})
export class SectionDialogFormComponent {
  sectionCreationForm: FormGroup;
  isLoading: boolean = false;

  private subscription : Subscription = new Subscription;
  
  constructor(private fb: FormBuilder, private sectionService: SectionService, private dialog: MatDialog) {

    this.sectionCreationForm = this.fb.group({
      name: ['', [Validators.required]]
    })

  }

  submit() {

    this.isLoading = true;
    this.subscription = this.sectionService.saveSection(this.sectionCreationForm.value).subscribe({
      next: () => {
        this.isLoading = false,
        this.sectionService.setPaginationSectionsSubject();
        this.sectionService.setSectionsSubject();
        this.closeSectionDialogForm();
        Swal.fire('Section Saved Successfuly');
      },
      error: () => {
        this.isLoading = false;
        Swal.fire('Error Occured');
      }
    });

  }

  closeSectionDialogForm() {
    this.dialog.closeAll();
  }

  ngOnDestroy() {

    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    
  }

}
