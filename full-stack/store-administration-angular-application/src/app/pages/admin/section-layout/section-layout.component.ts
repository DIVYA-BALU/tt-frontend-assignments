import { Component } from '@angular/core';

@Component({
  selector: 'app-section-layout',
  templateUrl: './section-layout.component.html',
  styleUrls: ['./section-layout.component.scss']
})
export class SectionLayoutComponent {

  sectionInput: boolean = false;
  
  enableSectionInput() {
    this.sectionInput = true;
  }

  disableSectionInput() {
    this.sectionInput = false;
  }

  saveSection() {
    this.sectionInput = false;
  }
}
