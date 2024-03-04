import { Component } from '@angular/core';
import { Successstory } from 'src/app/model/successstory';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {

  constructor(private studentService:StudentService) {
    this.getStories()
  }
  stories: Successstory[] = [];
  getStories() {
    this.studentService.getstories().subscribe((response) => {
      this.stories = response;
    })
  }


}
