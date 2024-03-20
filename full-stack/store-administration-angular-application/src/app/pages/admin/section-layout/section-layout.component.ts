import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Section } from 'src/app/core/models/API.model';
import { SectionService } from 'src/app/core/services/section.service';
import { SectionDialogFormComponent } from '../section-dialog-form/section-dialog-form.component';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-section-layout',
  templateUrl: './section-layout.component.html',
  styleUrls: ['./section-layout.component.scss']
})
export class SectionLayoutComponent {

  displayedColumns: string[] = ['Serial Number', 'Section Name'];
  dataSource: MatTableDataSource<Section>;
  pageNumber: number = 0;
  pageSize: number = 10;
  totalSections: number = 0;
  private subscription: Subscription = new Subscription;

  constructor(private sectionService: SectionService, private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<Section>;
  }

  ngOnInit(): void {
    this.sectionService.setPaginationSectionsSubject();
    this.getSectionDetails();
  }

  getSectionDetails() {
    this.subscription = this.sectionService.paginationSections$.subscribe({
      next: (paginationSection) => {
        this.dataSource.data = paginationSection.content;
        this.totalSections = paginationSection.totalElements;
      }
    });
  }

  onPageChange(event: PageEvent): void {
    this.pageNumber = event.pageIndex;
    this.pageSize = event.pageSize;
    this.sectionService.setPaginationSectionsSubject(this.pageNumber, this.pageSize);
    this.getSectionDetails();
  }

  openSectionDialogForm() {
    this.dialog.open(SectionDialogFormComponent, { disableClose: true });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.sectionService.unSubscribeAll();
  }

}
