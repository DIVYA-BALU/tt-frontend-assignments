import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Application } from 'src/app/model/application';
import { StudentService } from 'src/app/services/student.service';
import { ViewstudentComponent } from '../viewstudent/viewstudent.component';

@Component({
  selector: 'app-findstudents',
  templateUrl: './findstudents.component.html',
  styleUrls: ['./findstudents.component.scss']
})
export class FindstudentsComponent {


  year: string = '';
  course: string = '';
  college: string = '';
  constructor(private studentService: StudentService, private dialog: MatDialog) {
        this.getAllStudents()
  }
  students: Application[] = [];

  getStudentsByYear() {
    if(this.year){
      this.studentService.getStudentsByYear(this.year).subscribe(
        (response) => {
          this.students = response;
        }
      )
    }
    else {
      this.getAllStudents()
    }
  }

  getStudentsByCourse() {
    if(this.course){
      this.studentService.getStudentsByCourse(this.course).subscribe(
        (response) => {
          this.students = response;
        }
      )
    }
    else {
      this.getAllStudents()
    }
  }

  getStudentsByCollege() {
    if(this.college){
      this.studentService.getStudentsByCollege(this.college).subscribe(
        (response) => {
          this.students = response;
        }
      )
    }
    else {
      this.getAllStudents()
    }
  }
  getAllStudents() {
    this.studentService.getStudents().subscribe(
      (response) => {
         this.students = response;
         
      }
    )
  }

  viewStudent(student: Application) {
     const dialogRef =  this.dialog.open(ViewstudentComponent, {
        width: '700px',
        data: student
      });

      dialogRef.afterClosed().subscribe(
        () =>{
          this.getAllStudents();
        }
      )
    }
}
