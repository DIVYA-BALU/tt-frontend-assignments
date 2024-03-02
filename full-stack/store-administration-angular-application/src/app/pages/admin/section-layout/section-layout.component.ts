import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Section } from 'src/app/core/models/API.model';
import { SectionService } from 'src/app/core/services/section.service';
import { SectionDialogFormComponent } from '../section-dialog-form/section-dialog-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-section-layout',
  templateUrl: './section-layout.component.html',
  styleUrls: ['./section-layout.component.scss']
})
export class SectionLayoutComponent {

  displayedColumns: string[] = ['Serial Number', 'Section Name'];
  dataSource: MatTableDataSource<Section>;
  isLoading: boolean = false;

  constructor(private sectionService: SectionService, private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<Section>;
  }

  ngOnInit(): void {
    this.getSectionDetails();
  }
  
  getSectionDetails() {
    this.sectionService.paginationSections$.subscribe({
      next: (paginationSection) => {
        this.dataSource.data = paginationSection.content;
      }
    })
  }
  openSectionDialogForm() {
    const dialogRef = this.dialog.open(SectionDialogFormComponent, { disableClose: true });
  }
}
