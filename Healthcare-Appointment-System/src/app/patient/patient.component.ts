import { Component } from '@angular/core';
import { PatientService } from './patient.service';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {

  patients: any = [];
  constructor(private patientService: PatientService, private data: DataService) {
    this.listPatients();
  }

  // listPatients() {
  //   this.patientService.getAllPatients().subscribe({
  //     next: (response) => {
  //       this.patients = response;
  //     },
  //     error: (error) => {
  //       console.log('error:', error);
  //     },
  //     complete: () => { },
  //   });
  // }

  currentPage: number = 0;
  pageSize: number = 6;
  lastpage = false;

  listPatients(): void {
    this.patientService.getAllPatients(this.currentPage, this.pageSize)
      .subscribe(response => {
        this.patients = response.content;
        if (this.patients.length < this.pageSize)
          this.lastpage = true;
        else
          this.lastpage = false;
      });
  }

  nextPage(): void {
    this.currentPage++;
    this.listPatients();
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.listPatients();
    }
  }

  sendDetails(data: any) {
    this.data.changeMessage(data);
  }

}
