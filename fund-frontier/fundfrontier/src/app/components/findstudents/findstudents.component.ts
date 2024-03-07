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
        this.getAllStudents(0,3)
  }
  students: Application[] = [];
  pageNo: number = 0;

  getStudentsByYear() {
    if(this.year){
      this.studentService.getStudentsByYear(this.year).subscribe(
        (response) => {
          this.students = response;
        }
      )
    }
    else {
      this.getAllStudents(0,3)
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
      this.getAllStudents(0,3)
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
      this.getAllStudents(0,3)
    }
  }
  getAllStudents(pageNo: number, pageSize: number) {
    this.studentService.getStudents(pageNo, pageSize).subscribe(
      (response) => {
        response.content.forEach(
          data => {
            this.students.push(data);
          }
        )
         
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
          this.getAllStudents(0,3)
        }
      )
    }

    loadMore() {
      this.getAllStudents(++this.pageNo,3);
      }
}
