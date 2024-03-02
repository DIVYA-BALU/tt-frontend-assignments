import { Component } from '@angular/core';
import { Application } from 'src/app/model/application';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-findstudents',
  templateUrl: './findstudents.component.html',
  styleUrls: ['./findstudents.component.scss']
})
export class FindstudentsComponent {

  constructor(private studentService: StudentService) {
        this.getAllStudents()
  }

  students: Application[] = [];
  getAllStudents() {
    this.studentService.getStudents().subscribe(
      (response) => {
         console.log(response);
         this.students = response;
         
      }
    )
  }
}
