import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Studentdetails } from 'src/app/model/studentdetails';
import { Successstory } from 'src/app/model/successstory';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  students: Studentdetails[] = [];


  ngOnInit() {
    this.getAllStudents(0, 3);
  }

  constructor(private studentService: StudentService, private router: Router) {
    this.getStory()
  }

  story!: Successstory;
  getStory() {
    this.studentService.getstories(0, 1).subscribe((response) => {
      console.log(response);
      this.story = response.content[0];
    })
  }

  getTestimonials() {
    this.router.navigate(['header/testimonial']);
  }

  getAllStudents(pageNo: number, pageSize: number) {
    this.studentService.getStudents(pageNo, pageSize).subscribe(
      (response) => {
        response.content.forEach(
          data => {
            let details: Studentdetails = data;
            this.studentService.getRaisedAmount(data.email.email).subscribe(
              (data) => {
                details.fundRaised = data.amount;
                details.raisedPercent = (data.amount / details.fundRequired) * 100;
                this.students.push(details);
              }
            )



          }
        )

      }
    )
  }
}   
