import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Application } from 'src/app/model/application';
import { Studentdetails } from 'src/app/model/studentdetails';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-approvals',
  templateUrl: './approvals.component.html',
  styleUrls: ['./approvals.component.scss']
})
export class ApprovalsComponent {

  studentdetails: Studentdetails[] = [];
  displayedColumns: string[] = [
    'profilePhoto',
    'firstName',
    'lastName',
    'email',
    'phoneNumber',
    'gender',
    'countryOfBirth',
    'countryOfResidence',
    'dateOfBirth',
    'address',
    'city',
    'state',
    'zipCode',
    'school',
    'aadharCardProof',
    'incomeProof',
    'collegeName',
    'yearOfStudy',
    'course',
    'studentIdentityProof',
    'studentId',
    'fundRequired',
    'feeDetails',
    'endDate',
    'shortStory',
    'approval'
  ]

  dataSource!: MatTableDataSource<Studentdetails>;

  @ViewChild(MatPaginator) paginator!: MatPaginator

  constructor(private studentService: StudentService, private cdref: ChangeDetectorRef) {
    this.dataSource = new MatTableDataSource(this.studentdetails)
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe(
      (data) => {
        this.getAllPending(data.pageIndex, data.pageSize);
      }
    )
    this.getAllPending(0, 3);
    this.cdref.detectChanges();

  }

  nextPage(e: PageEvent) {
    this.getAllPending(e.pageIndex, e.pageSize);
  }


  getAllPending(pageIndex: number, pageSize: number) {
    this.studentService.getAllPending(pageIndex, pageSize).subscribe(
      (data) => {
        this.studentdetails = data.content;
        this.paginator.length = data.totalElements;
        this.paginator.pageIndex = data.number;
        this.paginator.pageSize = data.size;
        this.dataSource.data = this.studentdetails;
      }
    )
  }

  setApproved(name: string, student: Studentdetails) {
    this.studentService.setApproved(name, student).subscribe(
      () => {
        this.getAllPending(0, 3);
      }
    )
  }

  setRejected( student: Studentdetails) {
    this.studentService.setRejected( student).subscribe(
      () => {
        this.getAllPending(0, 3);
      }
    )
    }
}
