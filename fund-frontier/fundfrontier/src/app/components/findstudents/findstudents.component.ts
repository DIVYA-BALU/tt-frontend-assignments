import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Application } from 'src/app/model/application';
import { StudentService } from 'src/app/services/student.service';
import { ViewstudentComponent } from '../viewstudent/viewstudent.component';
import { User } from 'src/app/model/user';
import { Studentdetails } from 'src/app/model/studentdetails';

@Component({
  selector: 'app-findstudents',
  templateUrl: './findstudents.component.html',
  styleUrls: ['./findstudents.component.scss']
})
export class FindstudentsComponent {

  year: string = '';
  course: string = '';
  college: string = '';
  amountRaised: number = 0;

  constructor(private studentService: StudentService, private dialog: MatDialog) {

  }
  students: Studentdetails[] = [];
  pageNo: number = 0;

  ngOnInit() {
    this.getAllStudents(0, 3);
  }

  // getStudentsByYear() {
  //   if(this.year){
  //     this.studentService.getStudentsByYear(this.year).subscribe(
  //       (response) => {
  //         this.students = response;

  //       }
  //     )
  //   }
  // }

  // getStudentsByCourse() {
  //   if(this.course){
  //     this.studentService.getStudentsByCourse(this.course).subscribe(
  //       (response) => {
  //         this.students = response;
  //       }
  //     )
  //   }
  // }

  // getStudentsByCollege() {
  //   if(this.college){
  //     this.studentService.getStudentsByCollege(this.college).subscribe(
  //       (response) => {
  //         this.students = response;
  //       }
  //     )
  //   }
  // }
  getAllStudents(pageNo: number, pageSize: number) {
    this.studentService.getStudents(pageNo, pageSize).subscribe(
      (response) => {
        response.content.forEach(
          data => {            
            let details: Studentdetails = data;
            this.studentService.getRaisedAmount(data.email.email).subscribe(
              (data) => {                
                details.fundRaised = data.amount;
                details.raisedPercent = (data.amount/ details.fundRequired)*100;
                this.students.push(details);
              }
            )



          }
        )

      }
    )
  }

  viewStudent(student: Studentdetails) {
    const dialogRef = this.dialog.open(ViewstudentComponent, {
      height: '100%',
      data: {
        firstData: student,
        secondData: student.fundRequired - student.fundRaised
      } as DialogData,

    });

    dialogRef.afterClosed().subscribe()
  }

  loadMore() {
    this.getAllStudents(++this.pageNo, 3);
  }

  getRaisedAmount(student: Studentdetails) {


  }

  calculateProgressValue(student: Application) {

    return (this.amountRaised / student.fundRequired) * 100;
  }

  payment(student: Application) {

  }
}

export interface DialogData {
  firstData: Studentdetails;
  secondData: number;
}
