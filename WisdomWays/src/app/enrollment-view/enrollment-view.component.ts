import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { NgForm } from '@angular/forms';
import { EnrollmentViewService } from './enrollment-view.service';
import { EnrollmentsDTO } from '../models/enrollmentDTO';

@Component({
  selector: 'app-enrollment-view',
  templateUrl: './enrollment-view.component.html',
  styleUrls: ['./enrollment-view.component.scss']
})
export class EnrollmentViewComponent implements AfterViewInit{

  listOfUsers: EnrollmentsDTO[] = [];
  displayedColumns: string[] = ['username', 'enrollDate', 'status'];
  dataSource = new MatTableDataSource<EnrollmentsDTO>(this.listOfUsers); 

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private enrollmentViewService: EnrollmentViewService){}

  onView(enrollView: NgForm){
    // console.log(enrollView.value);
    this.enrollmentViewService.getAllEnrollments(enrollView.value.courseUid, this.paginator.pageSize, this.paginator.pageIndex).subscribe(data => {
      this.listOfUsers = data;
      this.dataSource.data = this.listOfUsers;
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    // console.log(this.dataSource.paginator);
    
  }


}
