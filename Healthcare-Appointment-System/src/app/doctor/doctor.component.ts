import { Component } from '@angular/core';
import { DoctorService } from './doctor.service';
import { DataService } from '../service/data.service';
import { AppointmentCompComponent } from '../appointment-comp/appointment-comp.component';
import { MatDialog } from '@angular/material/dialog';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
})
export class DoctorComponent {

  doctors: any = [];
  static doctor: boolean = false;

  constructor(private doctorService: DoctorService,
    private data: DataService,
    public dialog: MatDialog,
    private searchService: SearchService
  ) {
    this.listDoctors();
  }

  currentPage: number = 0;
  pageSize: number = 6;
  lastpage = false;

  ngOnInit() {
    this.searchService.searchResult.subscribe({
      next: (data) => {
        this.doctors = data;
      }
    })
  }

  listDoctors(): void {
    this.doctorService.getAllDoctors(this.currentPage, this.pageSize)
      .subscribe(response => {
        this.doctors = response.content;
        if (this.doctors.length < this.pageSize)
          this.lastpage = true;
        else
          this.lastpage = false;
      });
  }

  nextPage(): void {
    this.currentPage++;
    this.listDoctors();
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.listDoctors();
    }
  }

  sendDetails(data: any) {
    this.data.changeMessage(data);
  }

  isDoctor() {
    return DoctorComponent.doctor;
  }

  openDialog(details: any): void {
    const dialogRef = this.dialog.open(AppointmentCompComponent, {
      data: details,
      height: '600px',
      width: '700px',
    });
  }

  ngOnDestroy() {
  }
}
